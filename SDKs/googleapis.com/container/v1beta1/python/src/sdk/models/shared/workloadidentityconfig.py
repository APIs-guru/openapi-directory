from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkloadIdentityConfig:
    identity_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityNamespace' }})
    identity_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityProvider' }})
    workload_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadPool' }})
    
