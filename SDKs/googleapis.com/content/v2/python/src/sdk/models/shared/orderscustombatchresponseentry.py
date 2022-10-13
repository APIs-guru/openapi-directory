from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errors
from . import order


@dataclass_json
@dataclass
class OrdersCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    execution_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStatus' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    order: Optional[order.Order] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    
