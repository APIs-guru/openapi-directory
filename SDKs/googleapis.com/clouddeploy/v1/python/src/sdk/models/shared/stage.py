from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import strategy


@dataclass_json
@dataclass
class Stage:
    profiles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profiles' }})
    strategy: Optional[strategy.Strategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strategy' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetId' }})
    
