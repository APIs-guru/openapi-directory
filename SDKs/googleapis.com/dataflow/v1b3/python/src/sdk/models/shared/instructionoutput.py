from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstructionOutput:
    codec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codec' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    only_count_key_bytes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onlyCountKeyBytes' }})
    only_count_value_bytes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onlyCountValueBytes' }})
    original_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalName' }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemName' }})
    
