from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import finding
from . import resource

class ListFindingsResultStateChangeEnum(str, Enum):
    UNUSED = "UNUSED"
    CHANGED = "CHANGED"
    UNCHANGED = "UNCHANGED"
    ADDED = "ADDED"
    REMOVED = "REMOVED"


@dataclass_json
@dataclass
class ListFindingsResult:
    finding: Optional[finding.Finding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finding' }})
    resource: Optional[resource.Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    state_change: Optional[ListFindingsResultStateChangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateChange' }})
    
