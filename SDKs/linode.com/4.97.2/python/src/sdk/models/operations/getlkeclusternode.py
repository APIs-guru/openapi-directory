from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLkeClusterNodePathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeClusterNodeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLkeClusterNodeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLkeClusterNodeSecurity:
    option1: Optional[GetLkeClusterNodeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLkeClusterNodeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLkeClusterNodeRequest:
    path_params: GetLkeClusterNodePathParams = field(default=None)
    security: GetLkeClusterNodeSecurity = field(default=None)
    
class GetLkeClusterNode200ApplicationJSONDataStatusEnum(str, Enum):
    READY = "ready"
    NOT_READY = "not_ready"


@dataclass_json
@dataclass
class GetLkeClusterNode200ApplicationJSONData:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    instance_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_id' }})
    status: Optional[GetLkeClusterNode200ApplicationJSONDataStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class GetLkeClusterNode200ApplicationJSON:
    data: Optional[GetLkeClusterNode200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass_json
@dataclass
class GetLkeClusterNodeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLkeClusterNodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_lke_cluster_node_200_application_json_object: Optional[GetLkeClusterNode200ApplicationJSON] = field(default=None)
    get_lke_cluster_node_default_application_json_object: Optional[GetLkeClusterNodeDefaultApplicationJSON] = field(default=None)
    
