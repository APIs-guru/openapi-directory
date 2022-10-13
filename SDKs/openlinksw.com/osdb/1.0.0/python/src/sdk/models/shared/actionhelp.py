from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionHelp:
    action_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action_id' }})
    help_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'help_text' }})
    service_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_id' }})
    
