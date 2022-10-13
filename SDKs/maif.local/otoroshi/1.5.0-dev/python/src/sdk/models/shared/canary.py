from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import target


@dataclass_json
@dataclass
class Canary:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    root: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root' }})
    targets: List[target.Target] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    traffic: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traffic' }})
    
