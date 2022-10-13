from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import price
from . import price


@dataclass_json
@dataclass
class OrderLegacyPromotionBenefit:
    discount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount' }})
    offer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerIds' }})
    sub_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subType' }})
    tax_impact: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxImpact' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
