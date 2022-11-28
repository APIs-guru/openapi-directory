from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    STRING_VALUE = "STRING_VALUE"
    INT_VALUE = "INT_VALUE"
    DOUBLE_VALUE = "DOUBLE_VALUE"
    BOOLEAN_VALUE = "BOOLEAN_VALUE"
    PROTO_VALUE = "PROTO_VALUE"
    SERIALIZED_OBJECT_VALUE = "SERIALIZED_OBJECT_VALUE"
    STRING_ARRAY = "STRING_ARRAY"
    INT_ARRAY = "INT_ARRAY"
    DOUBLE_ARRAY = "DOUBLE_ARRAY"
    PROTO_ARRAY = "PROTO_ARRAY"
    PROTO_ENUM = "PROTO_ENUM"
    BOOLEAN_ARRAY = "BOOLEAN_ARRAY"
    PROTO_ENUM_ARRAY = "PROTO_ENUM_ARRAY"
    BYTES = "BYTES"
    BYTES_ARRAY = "BYTES_ARRAY"
    NON_SERIALIZABLE_OBJECT = "NON_SERIALIZABLE_OBJECT"
    JSON_VALUE = "JSON_VALUE"


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoParameterEntry:
    r"""EnterpriseCrmFrontendsEventbusProtoParameterEntry
    Key-value pair of EventBus parameters.
    """
    
    data_type: Optional[EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[EnterpriseCrmFrontendsEventbusProtoParameterValueType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
