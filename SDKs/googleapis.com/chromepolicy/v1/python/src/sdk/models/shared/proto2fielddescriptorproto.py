from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Proto2FieldDescriptorProtoLabelEnum(str, Enum):
    LABEL_OPTIONAL = "LABEL_OPTIONAL"
    LABEL_REQUIRED = "LABEL_REQUIRED"
    LABEL_REPEATED = "LABEL_REPEATED"

class Proto2FieldDescriptorProtoTypeEnum(str, Enum):
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
class Proto2FieldDescriptorProto:
    r"""Proto2FieldDescriptorProto
    Describes a field within a message.
    """
    
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    json_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonName') }})
    label: Optional[Proto2FieldDescriptorProtoLabelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    oneof_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneofIndex') }})
    proto3_optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proto3Optional') }})
    type: Optional[Proto2FieldDescriptorProtoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeName') }})
    
