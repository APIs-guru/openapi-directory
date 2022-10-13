from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubscriberEmailResponse:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    vid: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vid' }})
    
