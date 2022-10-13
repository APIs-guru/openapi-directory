from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmfrontendseventbusprotoparametervaluetype

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
    data_type: Optional[EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[enterprisecrmfrontendseventbusprotoparametervaluetype.EnterpriseCrmFrontendsEventbusProtoParameterValueType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
