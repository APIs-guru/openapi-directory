from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AdSlotCompatibilityEnum(str, Enum):
    DISPLAY = "DISPLAY"
    DISPLAY_INTERSTITIAL = "DISPLAY_INTERSTITIAL"
    APP = "APP"
    APP_INTERSTITIAL = "APP_INTERSTITIAL"
    IN_STREAM_VIDEO = "IN_STREAM_VIDEO"
    IN_STREAM_AUDIO = "IN_STREAM_AUDIO"

class AdSlotPaymentSourceTypeEnum(str, Enum):
    PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID = "PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID"
    PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID = "PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID"


@dataclass_json
@dataclass
class AdSlot:
    r"""AdSlot
    Ad Slot
    """
    
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    compatibility: Optional[AdSlotCompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibility') }})
    height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    linked_placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedPlacementId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    payment_source_type: Optional[AdSlotPaymentSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentSourceType') }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
