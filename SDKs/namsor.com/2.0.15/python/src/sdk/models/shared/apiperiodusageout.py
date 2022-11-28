from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIPeriodUsageOut:
    billing_period: Optional[APIBillingPeriodUsageOut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriod') }})
    overage_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overageCurrency') }})
    overage_excl_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overageExclTax') }})
    overage_incl_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overageInclTax') }})
    overage_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overageQuantity') }})
    subscription: Optional[APIPlanSubscriptionOut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
