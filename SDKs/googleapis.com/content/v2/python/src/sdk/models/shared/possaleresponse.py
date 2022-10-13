from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class PosSaleResponse:
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentLanguage' }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gtin' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    sale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saleId' }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeCode' }})
    target_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCountry' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
