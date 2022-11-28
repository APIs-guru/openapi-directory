from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""EnterpriseCrmFrontendsEventbusProtoParamSpecEntry
    Key-value pair of EventBus task parameters. Next id: 13
    """
    
    class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('className') }})
    collection_element_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionElementClassName') }})
    config: Optional[EnterpriseCrmEventbusProtoParamSpecEntryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    data_type: Optional[EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    default_value: Optional[EnterpriseCrmFrontendsEventbusProtoParameterValueType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    is_deprecated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeprecated') }})
    is_output: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOutput') }})
    json_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonSchema') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    proto_def: Optional[EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protoDef') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    validation_rule: Optional[EnterpriseCrmEventbusProtoParamSpecEntryValidationRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationRule') }})
    
