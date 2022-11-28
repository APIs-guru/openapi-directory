from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionPlanCommitmentInterval:
    r"""SubscriptionPlanCommitmentInterval
    In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses. 
    """
    
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class SubscriptionPlan:
    r"""SubscriptionPlan
    The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API\"s payment plans, see the API concepts.
    """
    
    commitment_interval: Optional[SubscriptionPlanCommitmentInterval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitmentInterval') }})
    is_commitment_plan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCommitmentPlan') }})
    plan_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planName') }})
    

@dataclass_json
@dataclass
class SubscriptionTransferInfo:
    r"""SubscriptionTransferInfo
    Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.
    """
    
    current_legacy_sku_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentLegacySkuId') }})
    minimum_transferable_seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumTransferableSeats') }})
    transferability_expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferabilityExpirationTime') }})
    

@dataclass_json
@dataclass
class SubscriptionTrialSettings:
    r"""SubscriptionTrialSettings
    The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.
    """
    
    is_in_trial: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInTrial') }})
    trial_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialEndTime') }})
    

@dataclass_json
@dataclass
class Subscription:
    r"""Subscription
    JSON template for a subscription.
    """
    
    billing_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingMethod') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    customer_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerDomain') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    deal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealCode') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    plan: Optional[SubscriptionPlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    purchase_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderId') }})
    renewal_settings: Optional[RenewalSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalSettings') }})
    resource_ui_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUiUrl') }})
    seats: Optional[Seats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seats') }})
    sku_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuId') }})
    sku_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuName') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    suspension_reasons: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionReasons') }})
    transfer_info: Optional[SubscriptionTransferInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferInfo') }})
    trial_settings: Optional[SubscriptionTrialSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialSettings') }})
    
