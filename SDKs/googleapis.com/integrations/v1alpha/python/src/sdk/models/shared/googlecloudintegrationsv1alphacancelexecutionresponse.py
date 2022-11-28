from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaCancelExecutionResponse:
    r"""GoogleCloudIntegrationsV1alphaCancelExecutionResponse
    Response for cancelling an execution.
    """
    
    is_canceled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCanceled') }})
    
