from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FieldCardinalityEnum(str, Enum):
    CARDINALITY_UNKNOWN = "CARDINALITY_UNKNOWN"
    CARDINALITY_OPTIONAL = "CARDINALITY_OPTIONAL"
    CARDINALITY_REQUIRED = "CARDINALITY_REQUIRED"
    CARDINALITY_REPEATED = "CARDINALITY_REPEATED"

class FieldKindEnum(str, Enum):
    TYPE_UNKNOWN = "TYPE_UNKNOWN"
    TYPE_DOUBLE = "TYPE_DOUBLE"
    TYPE_FLOAT = "TYPE_FLOAT"
    TYPE_INT64 = "TYPE_INT64"
    TYPE_UINT64 = "TYPE_UINT64"
    TYPE_INT32 = "TYPE_INT32"
    TYPE_FIXED64 = "TYPE_FIXED64"
    TYPE_FIXED32 = "TYPE_FIXED32"
    TYPE_BOOL = "TYPE_BOOL"
    TYPE_STRING = "TYPE_STRING"
    TYPE_GROUP = "TYPE_GROUP"
    TYPE_MESSAGE = "TYPE_MESSAGE"
    TYPE_BYTES = "TYPE_BYTES"
    TYPE_UINT32 = "TYPE_UINT32"
    TYPE_ENUM = "TYPE_ENUM"
    TYPE_SFIXED32 = "TYPE_SFIXED32"
    TYPE_SFIXED64 = "TYPE_SFIXED64"
    TYPE_SINT32 = "TYPE_SINT32"
    TYPE_SINT64 = "TYPE_SINT64"


@dataclass_json
@dataclass
class Field:
    r"""Field
    A single field of a message type.
    """
    
    cardinality: Optional[FieldCardinalityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardinality') }})
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    json_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonName') }})
    kind: Optional[FieldKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    oneof_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneofIndex') }})
    options: Optional[List[Option]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    packed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packed') }})
    type_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeUrl') }})
    
