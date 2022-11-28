from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttributeValue:
    r"""AttributeValue
    The allowed types for `[VALUE]` in a `[KEY]:[VALUE]` attribute.
    """
    
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValue') }})
    string_value: Optional[TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
