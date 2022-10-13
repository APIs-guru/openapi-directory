from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errors
from . import returnpolicy


@dataclass_json
@dataclass
class ReturnpolicyCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    return_policy: Optional[returnpolicy.ReturnPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPolicy' }})
    
