from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import crmlogerrorcode
from . import enterprisecrmeventbusprotoerrordetail
from . import enterprisecrmfrontendseventbusprotoeventexecutiondetails
from . import enterprisecrmeventbusprotoexecutiontraceinfo
from . import enterprisecrmfrontendseventbusprotoeventparameters
from . import enterprisecrmfrontendseventbusprotoeventparameters

class EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    POST = "POST"
    POST_TO_QUEUE = "POST_TO_QUEUE"
    SCHEDULE = "SCHEDULE"
    POST_BY_EVENT_CONFIG_ID = "POST_BY_EVENT_CONFIG_ID"
    POST_WITH_EVENT_DETAILS = "POST_WITH_EVENT_DETAILS"

class EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum(str, Enum):
    UNSPECIFIED_PRODUCT = "UNSPECIFIED_PRODUCT"
    IP = "IP"
    APIGEE = "APIGEE"
    SECURITY = "SECURITY"


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    error_code: Optional[crmlogerrorcode.CrmlogErrorCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    errors: Optional[List[enterprisecrmeventbusprotoerrordetail.EnterpriseCrmEventbusProtoErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    event_execution_details: Optional[enterprisecrmfrontendseventbusprotoeventexecutiondetails.EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventExecutionDetails' }})
    event_execution_info_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventExecutionInfoId' }})
    execution_trace_info: Optional[enterprisecrmeventbusprotoexecutiontraceinfo.EnterpriseCrmEventbusProtoExecutionTraceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionTraceInfo' }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime' }})
    post_method: Optional[EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postMethod' }})
    product: Optional[EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    request_params: Optional[enterprisecrmfrontendseventbusprotoeventparameters.EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestParams' }})
    response_params: Optional[enterprisecrmfrontendseventbusprotoeventparameters.EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseParams' }})
    snapshot_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotNumber' }})
    tenant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant' }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerId' }})
    workflow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowId' }})
    workflow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowName' }})
    workflow_retry_backoff_interval_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowRetryBackoffIntervalSeconds' }})
    
