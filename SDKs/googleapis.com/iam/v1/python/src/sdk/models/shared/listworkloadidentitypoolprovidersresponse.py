from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workloadidentitypoolprovider


@dataclass_json
@dataclass
class ListWorkloadIdentityPoolProvidersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    workload_identity_pool_providers: Optional[List[workloadidentitypoolprovider.WorkloadIdentityPoolProvider]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadIdentityPoolProviders' }})
    
