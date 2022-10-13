from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VersionKindEnum(str, Enum):
    VERSION_KIND_UNSPECIFIED = "VERSION_KIND_UNSPECIFIED"
    NORMAL = "NORMAL"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"


@dataclass_json
@dataclass
class Version:
    epoch: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'epoch' }})
    inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inclusive' }})
    kind: Optional[VersionKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
