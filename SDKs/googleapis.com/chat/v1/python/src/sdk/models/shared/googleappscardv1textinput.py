from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1action
from . import googleappscardv1suggestions
from . import googleappscardv1action

class GoogleAppsCardV1TextInputTypeEnum(str, Enum):
    SINGLE_LINE = "SINGLE_LINE"
    MULTIPLE_LINE = "MULTIPLE_LINE"


@dataclass_json
@dataclass
class GoogleAppsCardV1TextInput:
    auto_complete_action: Optional[googleappscardv1action.GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoCompleteAction' }})
    hint_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hintText' }})
    initial_suggestions: Optional[googleappscardv1suggestions.GoogleAppsCardV1Suggestions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialSuggestions' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    on_change_action: Optional[googleappscardv1action.GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onChangeAction' }})
    type: Optional[GoogleAppsCardV1TextInputTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
