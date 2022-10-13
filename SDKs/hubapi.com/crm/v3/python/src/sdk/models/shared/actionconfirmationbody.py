from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionConfirmationBody:
    cancel_button_label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelButtonLabel' }})
    confirm_button_label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmButtonLabel' }})
    prompt: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prompt' }})
    
