from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetNodeBalancerConfigPathParams:
    config_id: int = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeBalancerConfigSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetNodeBalancerConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetNodeBalancerConfigRequest:
    path_params: GetNodeBalancerConfigPathParams = field()
    security: GetNodeBalancerConfigSecurity = field()
    

@dataclass
class GetNodeBalancerConfigResponse:
    content_type: str = field()
    status_code: int = field()
    node_balancer_config: Optional[shared.NodeBalancerConfig] = field(default=None)
    get_node_balancer_config_default_application_json_object: Optional[GetNodeBalancerConfigDefaultApplicationJSON] = field(default=None)
    
