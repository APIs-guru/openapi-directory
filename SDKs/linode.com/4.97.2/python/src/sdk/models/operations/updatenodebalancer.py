from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateNodeBalancerPathParams:
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNodeBalancerSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateNodeBalancerSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateNodeBalancerSecurity:
    option1: Optional[UpdateNodeBalancerSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateNodeBalancerSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateNodeBalancerRequest:
    path_params: UpdateNodeBalancerPathParams = field(default=None)
    request: shared.NodeBalancer = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateNodeBalancerSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateNodeBalancerDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateNodeBalancerResponse:
    content_type: str = field(default=None)
    node_balancer: Optional[shared.NodeBalancer] = field(default=None)
    status_code: int = field(default=None)
    update_node_balancer_default_application_json_object: Optional[UpdateNodeBalancerDefaultApplicationJSON] = field(default=None)
    
