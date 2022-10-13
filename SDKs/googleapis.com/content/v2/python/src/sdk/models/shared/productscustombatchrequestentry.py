from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import product


@dataclass_json
@dataclass
class ProductsCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    product: Optional[product.Product] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
