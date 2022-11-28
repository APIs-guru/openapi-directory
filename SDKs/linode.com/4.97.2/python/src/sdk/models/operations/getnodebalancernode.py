from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetNodeBalancerNodePathParams:
    config_id: int = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    node_id: int = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeBalancerNodeSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetNodeBalancerNodeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetNodeBalancerNodeRequest:
    path_params: GetNodeBalancerNodePathParams = field()
    security: GetNodeBalancerNodeSecurity = field()
    

@dataclass
class GetNodeBalancerNodeResponse:
    content_type: str = field()
    status_code: int = field()
    node_balancer_node: Optional[shared.NodeBalancerNode] = field(default=None)
    get_node_balancer_node_default_application_json_object: Optional[GetNodeBalancerNodeDefaultApplicationJSON] = field(default=None)
    
