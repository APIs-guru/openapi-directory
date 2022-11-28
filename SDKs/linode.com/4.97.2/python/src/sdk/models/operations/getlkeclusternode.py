from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLkeClusterNodePathParams:
    cluster_id: int = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeClusterNodeSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
class GetLkeClusterNode200ApplicationJSONDataStatusEnum(str, Enum):
    READY = "ready"
    NOT_READY = "not_ready"


@dataclass_json
@dataclass
class GetLkeClusterNode200ApplicationJSONData:
    r"""GetLkeClusterNode200ApplicationJSONData
    The selected node in the cluster.
    
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_id') }})
    status: Optional[GetLkeClusterNode200ApplicationJSONDataStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetLkeClusterNode200ApplicationJSON:
    data: Optional[GetLkeClusterNode200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class GetLkeClusterNodeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLkeClusterNodeRequest:
    path_params: GetLkeClusterNodePathParams = field()
    security: GetLkeClusterNodeSecurity = field()
    

@dataclass
class GetLkeClusterNodeResponse:
    content_type: str = field()
    status_code: int = field()
    get_lke_cluster_node_200_application_json_object: Optional[GetLkeClusterNode200ApplicationJSON] = field(default=None)
    get_lke_cluster_node_default_application_json_object: Optional[GetLkeClusterNodeDefaultApplicationJSON] = field(default=None)
    
