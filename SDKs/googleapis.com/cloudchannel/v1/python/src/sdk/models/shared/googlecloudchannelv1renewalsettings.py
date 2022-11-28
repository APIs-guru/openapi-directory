from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum(str, Enum):
    PAYMENT_PLAN_UNSPECIFIED = "PAYMENT_PLAN_UNSPECIFIED"
    COMMITMENT = "COMMITMENT"
    FLEXIBLE = "FLEXIBLE"
    FREE = "FREE"
    TRIAL = "TRIAL"
    OFFLINE = "OFFLINE"


@dataclass_json
@dataclass
class GoogleCloudChannelV1RenewalSettings:
    r"""GoogleCloudChannelV1RenewalSettings
    Renewal settings for renewable Offers.
    """
    
    enable_renewal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableRenewal') }})
    payment_cycle: Optional[GoogleCloudChannelV1Period] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentCycle') }})
    payment_plan: Optional[GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentPlan') }})
    resize_unit_count: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resizeUnitCount') }})
    
