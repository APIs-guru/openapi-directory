from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import identityserviceauthmethod


@dataclass_json
@dataclass
class IdentityServiceMembershipSpec:
    auth_methods: Optional[List[identityserviceauthmethod.IdentityServiceAuthMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authMethods' }})
    
