from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Location:
    teams: List[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    tenant: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    
