from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetNodeBalancerNodePathParams:
    config_id: int = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    node_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeBalancerNodeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetNodeBalancerNodeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetNodeBalancerNodeSecurity:
    option1: Optional[GetNodeBalancerNodeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetNodeBalancerNodeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetNodeBalancerNodeRequest:
    path_params: GetNodeBalancerNodePathParams = field(default=None)
    security: GetNodeBalancerNodeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetNodeBalancerNodeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetNodeBalancerNodeResponse:
    content_type: str = field(default=None)
    node_balancer_node: Optional[shared.NodeBalancerNode] = field(default=None)
    status_code: int = field(default=None)
    get_node_balancer_node_default_application_json_object: Optional[GetNodeBalancerNodeDefaultApplicationJSON] = field(default=None)
    
