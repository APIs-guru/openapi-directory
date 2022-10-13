from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import anthosobservabilitymembershipspec
from . import anthosvmmembershipspec
from . import membershipspec
from . import configmanagementmembershipspec
from . import identityservicemembershipspec
from . import servicemeshmembershipspec
from . import policycontrollermembershipspec


@dataclass_json
@dataclass
class MembershipFeatureSpec:
    anthosobservability: Optional[anthosobservabilitymembershipspec.AnthosObservabilityMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anthosobservability' }})
    anthosvm: Optional[anthosvmmembershipspec.AnthosVMMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anthosvm' }})
    cloudbuild: Optional[membershipspec.MembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudbuild' }})
    configmanagement: Optional[configmanagementmembershipspec.ConfigManagementMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configmanagement' }})
    identityservice: Optional[identityservicemembershipspec.IdentityServiceMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityservice' }})
    mesh: Optional[servicemeshmembershipspec.ServiceMeshMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mesh' }})
    policycontroller: Optional[policycontrollermembershipspec.PolicyControllerMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policycontroller' }})
    
