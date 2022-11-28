from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListDeploymentsResponse:
    r"""GoogleCloudDialogflowCxV3ListDeploymentsResponse
    The response message for Deployments.ListDeployments.
    """
    
    deployments: Optional[List[GoogleCloudDialogflowCxV3Deployment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
