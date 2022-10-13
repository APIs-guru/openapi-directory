from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import routing


@dataclass_json
@dataclass
class Configuration:
    routing: Optional[routing.Routing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing' }})
    
