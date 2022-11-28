from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest:
    r"""GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest
    The request for executing an integration.
    """
    
    do_not_propagate_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doNotPropagateError') }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    input_parameters: Optional[dict[str, GoogleCloudIntegrationsV1alphaValueType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputParameters') }})
    parameter_entries: Optional[List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterEntries') }})
    parameters: Optional[EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    
