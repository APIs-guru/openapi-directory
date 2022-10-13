from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1period

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
    enable_renewal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableRenewal' }})
    payment_cycle: Optional[googlecloudchannelv1period.GoogleCloudChannelV1Period] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentCycle' }})
    payment_plan: Optional[GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentPlan' }})
    resize_unit_count: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resizeUnitCount' }})
    
