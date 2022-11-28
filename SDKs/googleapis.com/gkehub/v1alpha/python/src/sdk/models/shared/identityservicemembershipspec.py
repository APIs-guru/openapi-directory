from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IdentityServiceMembershipSpecInput:
    r"""IdentityServiceMembershipSpecInput
    **Anthos Identity Service**: Configuration for a single Membership.
    """
    
    auth_methods: Optional[List[IdentityServiceAuthMethodInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMethods') }})
    

@dataclass_json
@dataclass
class IdentityServiceMembershipSpec:
    r"""IdentityServiceMembershipSpec
    **Anthos Identity Service**: Configuration for a single Membership.
    """
    
    auth_methods: Optional[List[IdentityServiceAuthMethod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMethods') }})
    
