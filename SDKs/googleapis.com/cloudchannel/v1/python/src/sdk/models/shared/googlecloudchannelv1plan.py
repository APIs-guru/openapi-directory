from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudChannelV1Plan
    The payment plan for the Offer. Describes how to make a payment.
    """
    
    billing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingAccount') }})
    payment_cycle: Optional[GoogleCloudChannelV1Period] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentCycle') }})
    payment_plan: Optional[GoogleCloudChannelV1PlanPaymentPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentPlan') }})
    payment_type: Optional[GoogleCloudChannelV1PlanPaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentType') }})
    trial_period: Optional[GoogleCloudChannelV1Period] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialPeriod') }})
    
