from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Authority:
    identity_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityProvider' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    oidc_jwks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidcJwks' }})
    workload_identity_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadIdentityPool' }})
    
