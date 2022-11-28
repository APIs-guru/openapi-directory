from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SasPortalListDeploymentsResponse:
    r"""SasPortalListDeploymentsResponse
    Response for ListDeployments.
    """
    
    deployments: Optional[List[SasPortalDeployment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
