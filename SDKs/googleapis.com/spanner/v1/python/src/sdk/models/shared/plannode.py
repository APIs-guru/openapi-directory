from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import childlink
from . import shortrepresentation

class PlanNodeKindEnum(str, Enum):
    KIND_UNSPECIFIED = "KIND_UNSPECIFIED"
    RELATIONAL = "RELATIONAL"
    SCALAR = "SCALAR"


@dataclass_json
@dataclass
class PlanNode:
    child_links: Optional[List[childlink.ChildLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childLinks' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    execution_stats: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStats' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    kind: Optional[PlanNodeKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    short_representation: Optional[shortrepresentation.ShortRepresentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortRepresentation' }})
    
