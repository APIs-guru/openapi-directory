from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupkind


@dataclass_json
@dataclass
class ClusterResourceRestoreScope:
    selected_group_kinds: Optional[List[groupkind.GroupKind]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedGroupKinds' }})
    
