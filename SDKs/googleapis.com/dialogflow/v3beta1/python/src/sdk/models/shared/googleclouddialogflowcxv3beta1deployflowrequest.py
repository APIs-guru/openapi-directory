from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1DeployFlowRequest:
    r"""GoogleCloudDialogflowCxV3beta1DeployFlowRequest
    The request message for Environments.DeployFlow.
    """
    
    flow_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowVersion') }})
    
