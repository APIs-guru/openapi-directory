from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class PatchOpEnum(str, Enum):
    ADD = "add"
    REPLACE = "replace"
    REMOVE = "remove"
    COPY = "copy"
    TEST = "test"


@dataclass_json
@dataclass
class Patch:
    op: PatchOpEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
