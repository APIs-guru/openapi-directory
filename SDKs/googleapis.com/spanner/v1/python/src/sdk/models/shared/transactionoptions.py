from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import readonly
from . import readwrite


@dataclass_json
@dataclass
class TransactionOptions:
    partitioned_dml: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionedDml' }})
    read_only: Optional[readonly.ReadOnly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    read_write: Optional[readwrite.ReadWrite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readWrite' }})
    
