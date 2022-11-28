from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FormParameter:
    r"""GoogleCloudDialogflowCxV3FormParameter
    Represents a form parameter.
    """
    
    default_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityType') }})
    fill_behavior: Optional[GoogleCloudDialogflowCxV3FormParameterFillBehavior] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fillBehavior') }})
    is_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isList') }})
    redact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redact') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FormParameterInput:
    r"""GoogleCloudDialogflowCxV3FormParameterInput
    Represents a form parameter.
    """
    
    default_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityType') }})
    fill_behavior: Optional[GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fillBehavior') }})
    is_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isList') }})
    redact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redact') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    
