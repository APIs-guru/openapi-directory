from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaexecution
from . import enterprisecrmeventbusprotoeventexecutiondetails
from . import googlecloudintegrationsv1alphaexecutiondetails
from . import googlecloudintegrationsv1alphavaluetype
from . import enterprisecrmfrontendseventbusprotoparameterentry
from . import googlecloudintegrationsv1alphavaluetype
from . import enterprisecrmfrontendseventbusprotoparameterentry

class GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum(str, Enum):
    EXECUTION_METHOD_UNSPECIFIED = "EXECUTION_METHOD_UNSPECIFIED"
    POST = "POST"
    POST_TO_QUEUE = "POST_TO_QUEUE"
    SCHEDULE = "SCHEDULE"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaExecution:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    direct_sub_executions: Optional[List[googlecloudintegrationsv1alphaexecution.GoogleCloudIntegrationsV1alphaExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directSubExecutions' }})
    event_execution_details: Optional[enterprisecrmeventbusprotoeventexecutiondetails.EnterpriseCrmEventbusProtoEventExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventExecutionDetails' }})
    execution_details: Optional[googlecloudintegrationsv1alphaexecutiondetails.GoogleCloudIntegrationsV1alphaExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionDetails' }})
    execution_method: Optional[GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionMethod' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    request_parameters: Optional[dict[str, googlecloudintegrationsv1alphavaluetype.GoogleCloudIntegrationsV1alphaValueType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestParameters' }})
    request_params: Optional[List[enterprisecrmfrontendseventbusprotoparameterentry.EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestParams' }})
    response_parameters: Optional[dict[str, googlecloudintegrationsv1alphavaluetype.GoogleCloudIntegrationsV1alphaValueType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseParameters' }})
    response_params: Optional[List[enterprisecrmfrontendseventbusprotoparameterentry.EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseParams' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
