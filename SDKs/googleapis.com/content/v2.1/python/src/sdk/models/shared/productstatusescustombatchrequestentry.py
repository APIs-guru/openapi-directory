from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductstatusesCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    include_attributes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeAttributes' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
