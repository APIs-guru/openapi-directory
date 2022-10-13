from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmfrontendseventbusprotoeventparameters
from . import enterprisecrmfrontendseventbusprotoparameterentry


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse:
    event_parameters: Optional[enterprisecrmfrontendseventbusprotoeventparameters.EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventParameters' }})
    execution_failed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionFailed' }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionId' }})
    output_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputParameters' }})
    parameter_entries: Optional[List[enterprisecrmfrontendseventbusprotoparameterentry.EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterEntries' }})
    
