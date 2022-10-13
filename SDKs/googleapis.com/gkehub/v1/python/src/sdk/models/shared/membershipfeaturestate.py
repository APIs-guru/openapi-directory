from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import anthosvmmembershipstate
from . import appdevexperiencefeaturestate
from . import configmanagementmembershipstate
from . import identityservicemembershipstate
from . import servicemeshmembershipstate
from . import featurestate


@dataclass_json
@dataclass
class MembershipFeatureState:
    anthosvm: Optional[anthosvmmembershipstate.AnthosVMMembershipState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anthosvm' }})
    appdevexperience: Optional[appdevexperiencefeaturestate.AppDevExperienceFeatureState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appdevexperience' }})
    configmanagement: Optional[configmanagementmembershipstate.ConfigManagementMembershipState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configmanagement' }})
    identityservice: Optional[identityservicemembershipstate.IdentityServiceMembershipState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityservice' }})
    servicemesh: Optional[servicemeshmembershipstate.ServiceMeshMembershipState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicemesh' }})
    state: Optional[featurestate.FeatureState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
