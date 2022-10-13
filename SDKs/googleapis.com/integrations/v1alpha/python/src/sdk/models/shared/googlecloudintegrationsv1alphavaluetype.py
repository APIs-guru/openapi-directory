from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphabooleanparameterarray
from . import googlecloudintegrationsv1alphadoubleparameterarray
from . import googlecloudintegrationsv1alphaintparameterarray
from . import googlecloudintegrationsv1alphastringparameterarray


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaValueType:
    boolean_array: Optional[googlecloudintegrationsv1alphabooleanparameterarray.GoogleCloudIntegrationsV1alphaBooleanParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanArray' }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    double_array: Optional[googlecloudintegrationsv1alphadoubleparameterarray.GoogleCloudIntegrationsV1alphaDoubleParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleArray' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    int_array: Optional[googlecloudintegrationsv1alphaintparameterarray.GoogleCloudIntegrationsV1alphaIntParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intArray' }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intValue' }})
    json_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonValue' }})
    string_array: Optional[googlecloudintegrationsv1alphastringparameterarray.GoogleCloudIntegrationsV1alphaStringParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringArray' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
