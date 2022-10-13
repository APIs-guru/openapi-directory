from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphavaluetype
from . import enterprisecrmfrontendseventbusprotoparameterentry
from . import enterprisecrmfrontendseventbusprotoeventparameters


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest:
    do_not_propagate_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doNotPropagateError' }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionId' }})
    input_parameters: Optional[dict[str, googlecloudintegrationsv1alphavaluetype.GoogleCloudIntegrationsV1alphaValueType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputParameters' }})
    parameter_entries: Optional[List[enterprisecrmfrontendseventbusprotoparameterentry.EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterEntries' }})
    parameters: Optional[enterprisecrmfrontendseventbusprotoeventparameters.EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    
