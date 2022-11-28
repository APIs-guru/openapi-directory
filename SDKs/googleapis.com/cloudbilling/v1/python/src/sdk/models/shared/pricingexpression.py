from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PricingExpression:
    r"""PricingExpression
    Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage.
    """
    
    base_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseUnit') }})
    base_unit_conversion_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseUnitConversionFactor') }})
    base_unit_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseUnitDescription') }})
    display_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayQuantity') }})
    tiered_rates: Optional[List[TierRate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tieredRates') }})
    usage_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageUnit') }})
    usage_unit_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageUnitDescription') }})
    
