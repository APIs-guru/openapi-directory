from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClusterConfigurationRouting:
    cost_per_meter: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost_per_meter' }})
    cost_per_second: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost_per_second' }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    
