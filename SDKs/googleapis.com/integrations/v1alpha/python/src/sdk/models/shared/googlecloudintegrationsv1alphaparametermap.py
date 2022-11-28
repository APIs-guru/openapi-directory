from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum(str, Enum):
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

class GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum(str, Enum):
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


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaParameterMap:
    r"""GoogleCloudIntegrationsV1alphaParameterMap
    A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.
    """
    
    entries: Optional[List[GoogleCloudIntegrationsV1alphaParameterMapEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    key_type: Optional[GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyType') }})
    value_type: Optional[GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
