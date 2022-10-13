from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InitializeHubResponse:
    service_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceIdentity' }})
    workload_identity_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadIdentityPool' }})
    
