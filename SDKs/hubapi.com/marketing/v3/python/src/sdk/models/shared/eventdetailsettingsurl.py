from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventDetailSettingsURL:
    event_details_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDetailsUrl' }})
    
