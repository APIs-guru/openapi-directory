from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventDetailSettings:
    app_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    event_details_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDetailsUrl' }})
    
