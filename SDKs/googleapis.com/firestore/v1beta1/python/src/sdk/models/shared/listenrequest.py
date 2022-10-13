from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import target


@dataclass_json
@dataclass
class ListenRequest:
    add_target: Optional[target.Target] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addTarget' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    remove_target: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeTarget' }})
    
