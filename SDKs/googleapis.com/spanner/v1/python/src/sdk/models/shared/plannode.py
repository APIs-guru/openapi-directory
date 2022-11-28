from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PlanNodeKindEnum(str, Enum):
    KIND_UNSPECIFIED = "KIND_UNSPECIFIED"
    RELATIONAL = "RELATIONAL"
    SCALAR = "SCALAR"


@dataclass_json
@dataclass
class PlanNode:
    r"""PlanNode
    Node information for nodes appearing in a QueryPlan.plan_nodes.
    """
    
    child_links: Optional[List[ChildLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childLinks') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    execution_stats: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStats') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    kind: Optional[PlanNodeKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    short_representation: Optional[ShortRepresentation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortRepresentation') }})
    
