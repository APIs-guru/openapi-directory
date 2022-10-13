from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authority
from . import membershipendpoint
from . import membershipstate

class MembershipInfrastructureTypeEnum(str, Enum):
    INFRASTRUCTURE_TYPE_UNSPECIFIED = "INFRASTRUCTURE_TYPE_UNSPECIFIED"
    ON_PREM = "ON_PREM"
    MULTI_CLOUD = "MULTI_CLOUD"


@dataclass_json
@dataclass
class Membership:
    authority: Optional[authority.Authority] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authority' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    endpoint: Optional[membershipendpoint.MembershipEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    infrastructure_type: Optional[MembershipInfrastructureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureType' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_connection_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastConnectionTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[membershipstate.MembershipState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    unique_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueId' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
