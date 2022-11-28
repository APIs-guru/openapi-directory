from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse:
    r"""GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse
    The response for executing an integration.
    """
    
    event_parameters: Optional[EnterpriseCrmFrontendsEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventParameters') }})
    execution_failed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionFailed') }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    output_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputParameters') }})
    parameter_entries: Optional[List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterEntries') }})
    
