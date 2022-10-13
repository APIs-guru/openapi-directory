from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BadResponse:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    headers: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    status: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
