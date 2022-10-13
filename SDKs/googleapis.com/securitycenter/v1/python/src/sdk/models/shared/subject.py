from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SubjectKindEnum(str, Enum):
    AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED"
    USER = "USER"
    SERVICEACCOUNT = "SERVICEACCOUNT"
    GROUP = "GROUP"


@dataclass_json
@dataclass
class Subject:
    kind: Optional[SubjectKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ns' }})
    
