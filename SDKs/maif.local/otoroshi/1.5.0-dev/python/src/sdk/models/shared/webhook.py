from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Webhook:
    headers: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
