from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest:
    r"""GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest
    The request for scheduling an integration.
    """
    
    input_parameters: Optional[dict[str, GoogleCloudIntegrationsV1alphaValueType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputParameters') }})
    parameter_entries: Optional[List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterEntries') }})
    parameters: Optional[EnterpriseCrmEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    
