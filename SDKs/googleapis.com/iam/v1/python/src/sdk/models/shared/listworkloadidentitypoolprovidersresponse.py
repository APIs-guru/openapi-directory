from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWorkloadIdentityPoolProvidersResponse:
    r"""ListWorkloadIdentityPoolProvidersResponse
    Response message for ListWorkloadIdentityPoolProviders.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    workload_identity_pool_providers: Optional[List[WorkloadIdentityPoolProvider]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadIdentityPoolProviders') }})
    
