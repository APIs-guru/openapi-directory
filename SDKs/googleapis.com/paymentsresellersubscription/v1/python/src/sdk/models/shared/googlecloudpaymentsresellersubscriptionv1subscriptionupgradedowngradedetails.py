from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum(str, Enum):
    BILLING_CYCLE_SPEC_UNSPECIFIED = "BILLING_CYCLE_SPEC_UNSPECIFIED"
    BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION = "BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION"
    BILLING_CYCLE_SPEC_START_IMMEDIATELY = "BILLING_CYCLE_SPEC_START_IMMEDIATELY"


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails:
    billing_cycle_spec: Optional[GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingCycleSpec' }})
    previous_subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousSubscriptionId' }})
    
