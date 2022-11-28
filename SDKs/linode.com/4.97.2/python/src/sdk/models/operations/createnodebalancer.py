from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateNodeBalancerSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateNodeBalancerDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateNodeBalancerRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateNodeBalancerSecurity = field()
    

@dataclass
class CreateNodeBalancerResponse:
    content_type: str = field()
    status_code: int = field()
    node_balancer: Optional[shared.NodeBalancer] = field(default=None)
    create_node_balancer_default_application_json_object: Optional[CreateNodeBalancerDefaultApplicationJSON] = field(default=None)
    
