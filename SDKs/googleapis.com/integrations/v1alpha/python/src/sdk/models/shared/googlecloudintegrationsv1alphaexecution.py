from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum(str, Enum):
    EXECUTION_METHOD_UNSPECIFIED = "EXECUTION_METHOD_UNSPECIFIED"
    POST = "POST"
    POST_TO_QUEUE = "POST_TO_QUEUE"
    SCHEDULE = "SCHEDULE"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaExecution:
    r"""GoogleCloudIntegrationsV1alphaExecution
    The Execution resource contains detailed information of an individual integration execution.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    direct_sub_executions: Optional[List[GoogleCloudIntegrationsV1alphaExecution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directSubExecutions') }})
    event_execution_details: Optional[EnterpriseCrmEventbusProtoEventExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventExecutionDetails') }})
    execution_details: Optional[GoogleCloudIntegrationsV1alphaExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionDetails') }})
    execution_method: Optional[GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionMethod') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    request_parameters: Optional[dict[str, GoogleCloudIntegrationsV1alphaValueType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestParameters') }})
    request_params: Optional[List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestParams') }})
    response_parameters: Optional[dict[str, GoogleCloudIntegrationsV1alphaValueType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseParameters') }})
    response_params: Optional[List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseParams') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
