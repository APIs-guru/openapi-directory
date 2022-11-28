from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FieldTransformSetToServerValueEnum(str, Enum):
    SERVER_VALUE_UNSPECIFIED = "SERVER_VALUE_UNSPECIFIED"
    REQUEST_TIME = "REQUEST_TIME"


@dataclass_json
@dataclass
class FieldTransform:
    r"""FieldTransform
    A transformation of a field of the document.
    """
    
    append_missing_elements: Optional[ArrayValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appendMissingElements') }})
    field_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPath') }})
    increment: Optional[Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('increment') }})
    maximum: Optional[Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum') }})
    minimum: Optional[Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    remove_all_from_array: Optional[ArrayValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeAllFromArray') }})
    set_to_server_value: Optional[FieldTransformSetToServerValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setToServerValue') }})
    
