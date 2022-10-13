from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetNodeBalancerPathParams:
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeBalancerSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetNodeBalancerSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetNodeBalancerSecurity:
    option1: Optional[GetNodeBalancerSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetNodeBalancerSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetNodeBalancerRequest:
    path_params: GetNodeBalancerPathParams = field(default=None)
    security: GetNodeBalancerSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetNodeBalancerDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetNodeBalancerResponse:
    content_type: str = field(default=None)
    node_balancer: Optional[shared.NodeBalancer] = field(default=None)
    status_code: int = field(default=None)
    get_node_balancer_default_application_json_object: Optional[GetNodeBalancerDefaultApplicationJSON] = field(default=None)
    
