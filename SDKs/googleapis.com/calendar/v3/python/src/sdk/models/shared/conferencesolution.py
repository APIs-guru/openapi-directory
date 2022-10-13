from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import conferencesolutionkey


@dataclass_json
@dataclass
class ConferenceSolution:
    icon_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconUri' }})
    key: Optional[conferencesolutionkey.ConferenceSolutionKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
