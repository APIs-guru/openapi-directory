from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum(str, Enum):
    UNSPCIFIED = "UNSPCIFIED"
    SHEDDABLE = "SHEDDABLE"
    SHEDDABLE_PLUS = "SHEDDABLE_PLUS"
    CRITICAL = "CRITICAL"
    CRITICAL_PLUS = "CRITICAL_PLUS"


@dataclass_json
@dataclass
class GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequest:
    r"""GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequest
    Use this request to post all workflows associated with a given trigger id. Next available id: 10
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    ignore_error_if_no_active_workflow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreErrorIfNoActiveWorkflow') }})
    parameters: Optional[EnterpriseCrmEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    priority: Optional[GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequestPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    scheduled_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledTime') }})
    test_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testMode') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    workflow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowName') }})
    
