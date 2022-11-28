from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsCardV1SelectionItem:
    r"""GoogleAppsCardV1SelectionItem
    A selectable item in a selection input, such as a check box or a switch.
    """
    
    selected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
