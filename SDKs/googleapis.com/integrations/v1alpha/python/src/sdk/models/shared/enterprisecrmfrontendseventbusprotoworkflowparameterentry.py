from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotoattributes
from . import enterprisecrmfrontendseventbusprotoworkflowparameterentry
from . import enterprisecrmfrontendseventbusprotoparametervaluetype
from . import enterprisecrmeventbusprotonodeidentifier

class EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum(str, Enum):
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

class EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum(str, Enum):
    IN_OUT_TYPE_UNSPECIFIED = "IN_OUT_TYPE_UNSPECIFIED"
    IN = "IN"
    OUT = "OUT"
    IN_OUT = "IN_OUT"


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry:
    attributes: Optional[enterprisecrmeventbusprotoattributes.EnterpriseCrmEventbusProtoAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    children: Optional[List[enterprisecrmfrontendseventbusprotoworkflowparameterentry.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    data_type: Optional[EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    default_value: Optional[enterprisecrmfrontendseventbusprotoparametervaluetype.EnterpriseCrmFrontendsEventbusProtoParameterValueType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    in_out_type: Optional[EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inOutType' }})
    is_transient: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isTransient' }})
    json_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonSchema' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    produced_by: Optional[enterprisecrmeventbusprotonodeidentifier.EnterpriseCrmEventbusProtoNodeIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'producedBy' }})
    producer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'producer' }})
    proto_def_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protoDefName' }})
    proto_def_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protoDefPath' }})
    
