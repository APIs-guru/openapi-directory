from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentsListResponse:
    r"""DeploymentsListResponse
    A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.
    """
    
    deployments: Optional[List[Deployment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
