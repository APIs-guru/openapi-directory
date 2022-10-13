from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1value
from . import googlecloudchannelv1value
from . import googlecloudchannelv1value

class GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum(str, Enum):
    PARAMETER_TYPE_UNSPECIFIED = "PARAMETER_TYPE_UNSPECIFIED"
    INT64 = "INT64"
    STRING = "STRING"
    DOUBLE = "DOUBLE"


@dataclass_json
@dataclass
class GoogleCloudChannelV1ParameterDefinition:
    allowed_values: Optional[List[googlecloudchannelv1value.GoogleCloudChannelV1Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedValues' }})
    max_value: Optional[googlecloudchannelv1value.GoogleCloudChannelV1Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[googlecloudchannelv1value.GoogleCloudChannelV1Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optional' }})
    parameter_type: Optional[GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterType' }})
    
