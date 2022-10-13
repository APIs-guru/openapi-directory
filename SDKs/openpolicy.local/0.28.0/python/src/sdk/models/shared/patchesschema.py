from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class PatchesSchemaOpEnum(str, Enum):
    ADD = "add"
    REMOVE = "remove"
    REPLACE = "replace"
    MOVE = "move"
    COPY = "copy"
    TEST = "test"


@dataclass_json
@dataclass
class PatchesSchema:
    op: PatchesSchemaOpEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
