from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import repricingrulerestrictionboundary


@dataclass_json
@dataclass
class RepricingRuleRestriction:
    floor: Optional[repricingrulerestrictionboundary.RepricingRuleRestrictionBoundary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floor' }})
    use_auto_pricing_min_price: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useAutoPricingMinPrice' }})
    
