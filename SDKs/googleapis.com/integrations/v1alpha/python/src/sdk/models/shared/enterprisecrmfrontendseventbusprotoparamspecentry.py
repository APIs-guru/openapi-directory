from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotoparamspecentryconfig
from . import enterprisecrmfrontendseventbusprotoparametervaluetype
from . import enterprisecrmeventbusprotoparamspecentryprotodefinition
from . import enterprisecrmeventbusprotoparamspecentryvalidationrule

class EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum(str, Enum):
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
class EnterpriseCrmFrontendsEventbusProtoParamSpecEntry:
    class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'className' }})
    collection_element_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionElementClassName' }})
    config: Optional[enterprisecrmeventbusprotoparamspecentryconfig.EnterpriseCrmEventbusProtoParamSpecEntryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    data_type: Optional[EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    default_value: Optional[enterprisecrmfrontendseventbusprotoparametervaluetype.EnterpriseCrmFrontendsEventbusProtoParameterValueType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    is_deprecated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDeprecated' }})
    is_output: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isOutput' }})
    json_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonSchema' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    proto_def: Optional[enterprisecrmeventbusprotoparamspecentryprotodefinition.EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protoDef' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    validation_rule: Optional[enterprisecrmeventbusprotoparamspecentryvalidationrule.EnterpriseCrmEventbusProtoParamSpecEntryValidationRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationRule' }})
    
