from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaparametermapentry

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
    entries: Optional[List[googlecloudintegrationsv1alphaparametermapentry.GoogleCloudIntegrationsV1alphaParameterMapEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    key_type: Optional[GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyType' }})
    value_type: Optional[GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueType' }})
    
