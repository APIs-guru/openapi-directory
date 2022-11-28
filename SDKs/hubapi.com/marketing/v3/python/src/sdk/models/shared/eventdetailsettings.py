from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventDetailSettings:
    app_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    event_details_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDetailsUrl') }})
    
