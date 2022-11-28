from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo
    Contains all the execution details for a workflow instance. Next available id: 24
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    error_code: Optional[CrmlogErrorCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    errors: Optional[List[EnterpriseCrmEventbusProtoErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    event_execution_details: Optional[EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventExecutionDetails') }})
    event_execution_info_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventExecutionInfoId') }})
    execution_trace_info: Optional[EnterpriseCrmEventbusProtoExecutionTraceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTraceInfo') }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    post_method: Optional[EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postMethod') }})
    product: Optional[EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    request_params: Optional[EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestParams') }})
    response_params: Optional[EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseParams') }})
    snapshot_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotNumber') }})
    tenant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    workflow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    workflow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowName') }})
    workflow_retry_backoff_interval_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowRetryBackoffIntervalSeconds') }})
    
