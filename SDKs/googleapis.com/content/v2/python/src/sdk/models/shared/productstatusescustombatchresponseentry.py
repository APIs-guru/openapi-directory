from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errors
from . import productstatus


@dataclass_json
@dataclass
class ProductstatusesCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    product_status: Optional[productstatus.ProductStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productStatus' }})
    
