from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workloadidentitypool


@dataclass_json
@dataclass
class ListWorkloadIdentityPoolsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    workload_identity_pools: Optional[List[workloadidentitypool.WorkloadIdentityPool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadIdentityPools' }})
    
