from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RepricingRuleRestrictionBoundary:
    percentage_delta: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentageDelta' }})
    price_delta: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceDelta' }})
    
