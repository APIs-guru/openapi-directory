from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphavaluetype
from . import enterprisecrmfrontendseventbusprotoparameterentry
from . import enterprisecrmeventbusprotoeventparameters


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest:
    input_parameters: Optional[dict[str, googlecloudintegrationsv1alphavaluetype.GoogleCloudIntegrationsV1alphaValueType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputParameters' }})
    parameter_entries: Optional[List[enterprisecrmfrontendseventbusprotoparameterentry.EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterEntries' }})
    parameters: Optional[enterprisecrmeventbusprotoeventparameters.EnterpriseCrmEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTime' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    
