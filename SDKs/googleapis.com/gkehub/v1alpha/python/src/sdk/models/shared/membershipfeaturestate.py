from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MembershipFeatureState:
    r"""MembershipFeatureState
    MembershipFeatureState contains Feature status information for a single Membership.
    """
    
    appdevexperience: Optional[AppDevExperienceFeatureState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appdevexperience') }})
    configmanagement: Optional[ConfigManagementMembershipState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configmanagement') }})
    fleetobservability: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    identityservice: Optional[IdentityServiceMembershipState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityservice') }})
    metering: Optional[MeteringMembershipState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metering') }})
    policycontroller: Optional[PolicyControllerMembershipState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policycontroller') }})
    servicemesh: Optional[ServiceMeshMembershipState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicemesh') }})
    state: Optional[FeatureState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
