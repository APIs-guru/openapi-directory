from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionConfirmationBody:
    cancel_button_label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelButtonLabel') }})
    confirm_button_label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmButtonLabel') }})
    prompt: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prompt') }})
    
