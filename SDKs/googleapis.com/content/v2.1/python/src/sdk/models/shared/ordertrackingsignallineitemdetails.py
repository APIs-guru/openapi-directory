from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderTrackingSignalLineItemDetails:
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gtin' }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemId' }})
    mpn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpn' }})
    product_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productDescription' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    product_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTitle' }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    upc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upc' }})
    
