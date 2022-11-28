from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaLiftSuspensionRequest:
    r"""GoogleCloudIntegrationsV1alphaLiftSuspensionRequest
    Request for lift Suspension
    """
    
    suspension_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionResult') }})
    
