from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionLabels:
    r"""ActionLabels
    User-facing labels for this custom workflow action.
    """
    
    action_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    action_card_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionCardContent') }})
    action_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionDescription') }})
    app_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appDisplayName') }})
    input_field_descriptions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFieldDescriptions') }})
    input_field_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFieldLabels') }})
    
