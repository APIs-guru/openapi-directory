from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errors
from . import returnaddress


@dataclass_json
@dataclass
class ReturnaddressCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    return_address: Optional[returnaddress.ReturnAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnAddress' }})
    
