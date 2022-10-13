from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetreference
from . import targetreference


@dataclass_json
@dataclass
class Move:
    added_parents: Optional[List[targetreference.TargetReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedParents' }})
    removed_parents: Optional[List[targetreference.TargetReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removedParents' }})
    
