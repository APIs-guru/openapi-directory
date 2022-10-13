from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleidentityaccesscontextmanagerv1egresspolicy
from . import googleidentityaccesscontextmanagerv1ingresspolicy
from . import googleidentityaccesscontextmanagerv1vpcaccessibleservices


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig:
    access_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLevels' }})
    egress_policies: Optional[List[googleidentityaccesscontextmanagerv1egresspolicy.GoogleIdentityAccesscontextmanagerV1EgressPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egressPolicies' }})
    ingress_policies: Optional[List[googleidentityaccesscontextmanagerv1ingresspolicy.GoogleIdentityAccesscontextmanagerV1IngressPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingressPolicies' }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    restricted_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedServices' }})
    vpc_accessible_services: Optional[googleidentityaccesscontextmanagerv1vpcaccessibleservices.GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcAccessibleServices' }})
    
