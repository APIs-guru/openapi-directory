from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorUnauthorized:
    error_title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
