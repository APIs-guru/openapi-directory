from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import arrayvalue
from . import value
from . import value
from . import value
from . import arrayvalue

class FieldTransformSetToServerValueEnum(str, Enum):
    SERVER_VALUE_UNSPECIFIED = "SERVER_VALUE_UNSPECIFIED"
    REQUEST_TIME = "REQUEST_TIME"


@dataclass_json
@dataclass
class FieldTransform:
    append_missing_elements: Optional[arrayvalue.ArrayValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appendMissingElements' }})
    field_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldPath' }})
    increment: Optional[value.Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'increment' }})
    maximum: Optional[value.Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximum' }})
    minimum: Optional[value.Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimum' }})
    remove_all_from_array: Optional[arrayvalue.ArrayValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeAllFromArray' }})
    set_to_server_value: Optional[FieldTransformSetToServerValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setToServerValue' }})
    
