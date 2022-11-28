from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaValueType:
    r"""GoogleCloudIntegrationsV1alphaValueType
    The type of the parameter.
    """
    
    boolean_array: Optional[GoogleCloudIntegrationsV1alphaBooleanParameterArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanArray') }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    double_array: Optional[GoogleCloudIntegrationsV1alphaDoubleParameterArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleArray') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    int_array: Optional[GoogleCloudIntegrationsV1alphaIntParameterArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intArray') }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValue') }})
    json_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonValue') }})
    string_array: Optional[GoogleCloudIntegrationsV1alphaStringParameterArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringArray') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
