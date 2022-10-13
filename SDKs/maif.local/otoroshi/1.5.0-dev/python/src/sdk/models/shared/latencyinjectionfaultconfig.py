from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LatencyInjectionFaultConfig:
    from_: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    ratio: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratio' }})
    to: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
