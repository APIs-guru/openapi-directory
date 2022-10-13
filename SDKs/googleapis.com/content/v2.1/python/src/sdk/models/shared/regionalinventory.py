from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customattribute
from . import price
from . import price


@dataclass_json
@dataclass
class RegionalInventory:
    availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    custom_attributes: Optional[List[customattribute.CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customAttributes' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    region_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionId' }})
    sale_price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salePrice' }})
    sale_price_effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salePriceEffectiveDate' }})
    
