from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1LoadVersionRequest:
    r"""GoogleCloudDialogflowCxV3beta1LoadVersionRequest
    The request message for Versions.LoadVersion.
    """
    
    allow_override_agent_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowOverrideAgentResources') }})
    
