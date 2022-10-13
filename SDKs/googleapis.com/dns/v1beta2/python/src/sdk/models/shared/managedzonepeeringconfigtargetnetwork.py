from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ManagedZonePeeringConfigTargetNetwork:
    deactivate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deactivateTime' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    network_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUrl' }})
    
