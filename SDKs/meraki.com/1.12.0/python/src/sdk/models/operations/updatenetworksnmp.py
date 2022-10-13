from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSnmpPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSnmpRequestBodyAccessEnum(str, Enum):
    NONE = "none"
    COMMUNITY = "community"
    USERS = "users"


@dataclass_json
@dataclass
class UpdateNetworkSnmpRequestBodyUsers:
    passphrase: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passphrase' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSnmpRequestBody:
    access: Optional[UpdateNetworkSnmpRequestBodyAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    community_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communityString' }})
    users: Optional[List[UpdateNetworkSnmpRequestBodyUsers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass
class UpdateNetworkSnmpRequest:
    path_params: UpdateNetworkSnmpPathParams = field(default=None)
    request: Optional[UpdateNetworkSnmpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSnmpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_snmp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
