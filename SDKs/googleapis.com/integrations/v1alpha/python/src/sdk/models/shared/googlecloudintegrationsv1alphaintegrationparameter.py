from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum(str, Enum):
    INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED = "INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED"
    STRING_VALUE = "STRING_VALUE"
    INT_VALUE = "INT_VALUE"
    DOUBLE_VALUE = "DOUBLE_VALUE"
    BOOLEAN_VALUE = "BOOLEAN_VALUE"
    STRING_ARRAY = "STRING_ARRAY"
    INT_ARRAY = "INT_ARRAY"
    DOUBLE_ARRAY = "DOUBLE_ARRAY"
    BOOLEAN_ARRAY = "BOOLEAN_ARRAY"
    JSON_VALUE = "JSON_VALUE"
    PROTO_VALUE = "PROTO_VALUE"
    PROTO_ARRAY = "PROTO_ARRAY"

class GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum(str, Enum):
    IN_OUT_TYPE_UNSPECIFIED = "IN_OUT_TYPE_UNSPECIFIED"
    IN = "IN"
    OUT = "OUT"
    IN_OUT = "IN_OUT"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaIntegrationParameter:
    r"""GoogleCloudIntegrationsV1alphaIntegrationParameter
    Integration Parameter is defined in the integration config and are used to provide information about data types of the expected parameters and provide any default values if needed. They can also be used to add custom attributes. These are static in nature and should not be used for dynamic event definition.
    """
    
    data_type: Optional[GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    default_value: Optional[GoogleCloudIntegrationsV1alphaValueType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    input_output_type: Optional[GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputOutputType') }})
    is_transient: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTransient') }})
    json_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonSchema') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    producer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producer') }})
    searchable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchable') }})
    
