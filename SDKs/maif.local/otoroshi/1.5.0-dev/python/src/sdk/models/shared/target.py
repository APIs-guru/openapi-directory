from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Target:
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    scheme: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheme' }})
    
