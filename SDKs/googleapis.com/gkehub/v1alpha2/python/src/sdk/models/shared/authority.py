from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthorityInput:
    r"""AuthorityInput
    Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
    """
    
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    oidc_jwks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcJwks') }})
    

@dataclass_json
@dataclass
class Authority:
    r"""Authority
    Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
    """
    
    identity_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityProvider') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    oidc_jwks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcJwks') }})
    workload_identity_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadIdentityPool') }})
    
