from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateNodeBalancerConfigPathParams:
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNodeBalancerConfigSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateNodeBalancerConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateNodeBalancerConfigRequest:
    path_params: CreateNodeBalancerConfigPathParams = field()
    security: CreateNodeBalancerConfigSecurity = field()
    request: Optional[shared.NodeBalancerConfigInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNodeBalancerConfigResponse:
    content_type: str = field()
    status_code: int = field()
    node_balancer_config: Optional[shared.NodeBalancerConfig] = field(default=None)
    create_node_balancer_config_default_application_json_object: Optional[CreateNodeBalancerConfigDefaultApplicationJSON] = field(default=None)
    
