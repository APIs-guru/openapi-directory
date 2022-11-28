from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CustomEventInsertInsertEventTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    IMPRESSION = "IMPRESSION"
    CLICK = "CLICK"


@dataclass_json
@dataclass
class CustomEventInsert:
    r"""CustomEventInsert
    Custom event to be inserted.
    """
    
    cm_dimensions: Optional[CampaignManagerIds] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmDimensions') }})
    dv3_dimensions: Optional[Dv3Ids] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dv3Dimensions') }})
    insert_event_type: Optional[CustomEventInsertInsertEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertEventType') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    match_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchId') }})
    mobile_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileDeviceId') }})
    
