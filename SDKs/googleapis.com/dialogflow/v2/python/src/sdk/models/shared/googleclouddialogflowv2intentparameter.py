from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentParameter:
    r"""GoogleCloudDialogflowV2IntentParameter
    Represents intent parameters.
    """
    
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_type_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityTypeDisplayName') }})
    is_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isList') }})
    mandatory: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandatory') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prompts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prompts') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
