from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import manualsharding
from . import uniformsharding


@dataclass_json
@dataclass
class ShardingOption:
    manual_sharding: Optional[manualsharding.ManualSharding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualSharding' }})
    uniform_sharding: Optional[uniformsharding.UniformSharding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniformSharding' }})
    
