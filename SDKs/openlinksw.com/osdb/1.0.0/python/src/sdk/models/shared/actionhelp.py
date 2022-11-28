from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionHelp:
    action_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_id') }})
    help_text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('help_text') }})
    service_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_id') }})
    
