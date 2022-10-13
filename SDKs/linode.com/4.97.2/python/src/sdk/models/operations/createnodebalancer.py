from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateNodeBalancerSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateNodeBalancerSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateNodeBalancerSecurity:
    option1: Optional[CreateNodeBalancerSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateNodeBalancerSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateNodeBalancerRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateNodeBalancerSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateNodeBalancerDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateNodeBalancerResponse:
    content_type: str = field(default=None)
    node_balancer: Optional[shared.NodeBalancer] = field(default=None)
    status_code: int = field(default=None)
    create_node_balancer_default_application_json_object: Optional[CreateNodeBalancerDefaultApplicationJSON] = field(default=None)
    
