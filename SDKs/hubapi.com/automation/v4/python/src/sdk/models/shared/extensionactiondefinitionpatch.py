from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExtensionActionDefinitionPatch:
    r"""ExtensionActionDefinitionPatch
    Fields on custom workflow action to be updated.
    """
    
    action_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionUrl') }})
    input_field_dependencies: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFieldDependencies') }})
    input_fields: Optional[List[InputFieldDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFields') }})
    labels: Optional[dict[str, ActionLabels]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    object_request_options: Optional[ObjectRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectRequestOptions') }})
    object_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypes') }})
    published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    
