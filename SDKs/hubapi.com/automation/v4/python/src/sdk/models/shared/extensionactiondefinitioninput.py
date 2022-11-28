from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExtensionActionDefinitionInput:
    r"""ExtensionActionDefinitionInput
    State of custom workflow action to be created.
    """
    
    action_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionUrl') }})
    functions: List[ActionFunction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functions') }})
    input_fields: List[InputFieldDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFields') }})
    labels: dict[str, ActionLabels] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    object_types: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypes') }})
    published: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    archived_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archivedAt') }})
    input_field_dependencies: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFieldDependencies') }})
    object_request_options: Optional[ObjectRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectRequestOptions') }})
    
