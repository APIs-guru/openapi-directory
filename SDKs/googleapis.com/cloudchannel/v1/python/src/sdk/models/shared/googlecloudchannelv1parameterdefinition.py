from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum(str, Enum):
    PARAMETER_TYPE_UNSPECIFIED = "PARAMETER_TYPE_UNSPECIFIED"
    INT64 = "INT64"
    STRING = "STRING"
    DOUBLE = "DOUBLE"


@dataclass_json
@dataclass
class GoogleCloudChannelV1ParameterDefinition:
    r"""GoogleCloudChannelV1ParameterDefinition
    Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.
    """
    
    allowed_values: Optional[List[GoogleCloudChannelV1Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedValues') }})
    max_value: Optional[GoogleCloudChannelV1Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[GoogleCloudChannelV1Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optional') }})
    parameter_type: Optional[GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterType') }})
    
