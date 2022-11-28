from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MembershipFeatureSpec:
    r"""MembershipFeatureSpec
    MembershipFeatureSpec contains configuration information for a single Membership.
    """
    
    configmanagement: Optional[ConfigManagementMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configmanagement') }})
    fleetobservability: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    identityservice: Optional[IdentityServiceMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityservice') }})
    mesh: Optional[ServiceMeshMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mesh') }})
    

@dataclass_json
@dataclass
class MembershipFeatureSpecInput:
    r"""MembershipFeatureSpecInput
    MembershipFeatureSpec contains configuration information for a single Membership.
    """
    
    configmanagement: Optional[ConfigManagementMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configmanagement') }})
    fleetobservability: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    identityservice: Optional[IdentityServiceMembershipSpecInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityservice') }})
    mesh: Optional[ServiceMeshMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mesh') }})
    
