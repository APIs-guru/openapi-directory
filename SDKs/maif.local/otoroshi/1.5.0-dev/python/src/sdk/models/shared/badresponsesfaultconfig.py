from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import badresponse


@dataclass_json
@dataclass
class BadResponsesFaultConfig:
    ratio: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratio' }})
    responses: List[badresponse.BadResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    
