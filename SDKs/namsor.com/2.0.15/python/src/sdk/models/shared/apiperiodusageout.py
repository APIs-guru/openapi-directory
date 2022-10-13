from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import apibillingperiodusageout
from . import apiplansubscriptionout


@dataclass_json
@dataclass
class APIPeriodUsageOut:
    billing_period: Optional[apibillingperiodusageout.APIBillingPeriodUsageOut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingPeriod' }})
    overage_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overageCurrency' }})
    overage_excl_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overageExclTax' }})
    overage_incl_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overageInclTax' }})
    overage_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overageQuantity' }})
    subscription: Optional[apiplansubscriptionout.APIPlanSubscriptionOut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    
