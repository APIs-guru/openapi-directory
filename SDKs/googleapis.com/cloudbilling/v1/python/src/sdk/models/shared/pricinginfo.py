from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aggregationinfo
from . import pricingexpression


@dataclass_json
@dataclass
class PricingInfo:
    aggregation_info: Optional[aggregationinfo.AggregationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationInfo' }})
    currency_conversion_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyConversionRate' }})
    effective_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveTime' }})
    pricing_expression: Optional[pricingexpression.PricingExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricingExpression' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
