from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig:
    r"""GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig
    `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
    """
    
    access_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevels') }})
    egress_policies: Optional[List[GoogleIdentityAccesscontextmanagerV1EgressPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressPolicies') }})
    ingress_policies: Optional[List[GoogleIdentityAccesscontextmanagerV1IngressPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressPolicies') }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    restricted_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedServices') }})
    vpc_accessible_services: Optional[GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcAccessibleServices') }})
    
