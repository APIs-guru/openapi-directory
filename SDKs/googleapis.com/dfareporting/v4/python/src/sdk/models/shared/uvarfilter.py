from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class UvarFilterMatchEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    EXACT = "EXACT"
    CONTAINS = "CONTAINS"


@dataclass_json
@dataclass
class UvarFilter:
    complement: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complement' }})
    index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    match: Optional[UvarFilterMatchEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
