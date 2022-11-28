from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteNodeBalancerPathParams:
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNodeBalancerSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteNodeBalancerDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteNodeBalancerRequest:
    path_params: DeleteNodeBalancerPathParams = field()
    security: DeleteNodeBalancerSecurity = field()
    

@dataclass
class DeleteNodeBalancerResponse:
    content_type: str = field()
    status_code: int = field()
    delete_node_balancer_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_node_balancer_default_application_json_object: Optional[DeleteNodeBalancerDefaultApplicationJSON] = field(default=None)
    
