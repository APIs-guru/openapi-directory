from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import renewalsettings
from . import seats


@dataclass_json
@dataclass
class SubscriptionPlanCommitmentInterval:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    

@dataclass_json
@dataclass
class SubscriptionPlan:
    commitment_interval: Optional[SubscriptionPlanCommitmentInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitmentInterval' }})
    is_commitment_plan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCommitmentPlan' }})
    plan_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planName' }})
    

@dataclass_json
@dataclass
class SubscriptionTransferInfo:
    current_legacy_sku_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentLegacySkuId' }})
    minimum_transferable_seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumTransferableSeats' }})
    transferability_expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferabilityExpirationTime' }})
    

@dataclass_json
@dataclass
class SubscriptionTrialSettings:
    is_in_trial: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isInTrial' }})
    trial_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialEndTime' }})
    

@dataclass_json
@dataclass
class Subscription:
    billing_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingMethod' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    customer_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerDomain' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    deal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealCode' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    plan: Optional[SubscriptionPlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    purchase_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseOrderId' }})
    renewal_settings: Optional[renewalsettings.RenewalSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewalSettings' }})
    resource_ui_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUiUrl' }})
    seats: Optional[seats.Seats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seats' }})
    sku_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuId' }})
    sku_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuName' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    suspension_reasons: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspensionReasons' }})
    transfer_info: Optional[SubscriptionTransferInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferInfo' }})
    trial_settings: Optional[SubscriptionTrialSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialSettings' }})
    
