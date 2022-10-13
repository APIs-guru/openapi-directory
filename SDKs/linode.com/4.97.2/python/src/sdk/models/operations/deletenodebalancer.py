from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteNodeBalancerPathParams:
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNodeBalancerSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteNodeBalancerSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteNodeBalancerSecurity:
    option1: Optional[DeleteNodeBalancerSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteNodeBalancerSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteNodeBalancerRequest:
    path_params: DeleteNodeBalancerPathParams = field(default=None)
    security: DeleteNodeBalancerSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteNodeBalancerDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteNodeBalancerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_node_balancer_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_node_balancer_default_application_json_object: Optional[DeleteNodeBalancerDefaultApplicationJSON] = field(default=None)
    
