from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import anthosvmmembershipspec
from . import configmanagementmembershipspec
from . import identityservicemembershipspec
from . import servicemeshmembershipspec


@dataclass_json
@dataclass
class MembershipFeatureSpec:
    anthosvm: Optional[anthosvmmembershipspec.AnthosVMMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anthosvm' }})
    configmanagement: Optional[configmanagementmembershipspec.ConfigManagementMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configmanagement' }})
    identityservice: Optional[identityservicemembershipspec.IdentityServiceMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityservice' }})
    mesh: Optional[servicemeshmembershipspec.ServiceMeshMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mesh' }})
    
