from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customattribute
from . import price
from . import price


@dataclass_json
@dataclass
class LocalInventory:
    availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    custom_attributes: Optional[List[customattribute.CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customAttributes' }})
    instore_product_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instoreProductLocation' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    pickup_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupMethod' }})
    pickup_sla: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupSla' }})
    price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    sale_price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salePrice' }})
    sale_price_effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salePriceEffectiveDate' }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeCode' }})
    
