from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDeploymentsResponse:
    r"""ListDeploymentsResponse
    Response with the list of deployments for the specified Apps Script project.
    """
    
    deployments: Optional[List[Deployment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
