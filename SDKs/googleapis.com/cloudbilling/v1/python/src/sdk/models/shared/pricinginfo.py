from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PricingInfo:
    r"""PricingInfo
    Represents the pricing information for a SKU at a single point of time.
    """
    
    aggregation_info: Optional[AggregationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationInfo') }})
    currency_conversion_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyConversionRate') }})
    effective_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveTime') }})
    pricing_expression: Optional[PricingExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingExpression') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
