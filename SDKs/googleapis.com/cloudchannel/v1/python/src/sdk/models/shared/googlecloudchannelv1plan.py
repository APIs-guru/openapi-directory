from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1period
from . import googlecloudchannelv1period

class GoogleCloudChannelV1PlanPaymentPlanEnum(str, Enum):
    PAYMENT_PLAN_UNSPECIFIED = "PAYMENT_PLAN_UNSPECIFIED"
    COMMITMENT = "COMMITMENT"
    FLEXIBLE = "FLEXIBLE"
    FREE = "FREE"
    TRIAL = "TRIAL"
    OFFLINE = "OFFLINE"

class GoogleCloudChannelV1PlanPaymentTypeEnum(str, Enum):
    PAYMENT_TYPE_UNSPECIFIED = "PAYMENT_TYPE_UNSPECIFIED"
    PREPAY = "PREPAY"
    POSTPAY = "POSTPAY"


@dataclass_json
@dataclass
class GoogleCloudChannelV1Plan:
    billing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingAccount' }})
    payment_cycle: Optional[googlecloudchannelv1period.GoogleCloudChannelV1Period] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentCycle' }})
    payment_plan: Optional[GoogleCloudChannelV1PlanPaymentPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentPlan' }})
    payment_type: Optional[GoogleCloudChannelV1PlanPaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentType' }})
    trial_period: Optional[googlecloudchannelv1period.GoogleCloudChannelV1Period] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialPeriod' }})
    
