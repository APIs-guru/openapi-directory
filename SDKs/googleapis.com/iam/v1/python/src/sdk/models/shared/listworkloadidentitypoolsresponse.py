from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWorkloadIdentityPoolsResponse:
    r"""ListWorkloadIdentityPoolsResponse
    Response message for ListWorkloadIdentityPools.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    workload_identity_pools: Optional[List[WorkloadIdentityPool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadIdentityPools') }})
    
