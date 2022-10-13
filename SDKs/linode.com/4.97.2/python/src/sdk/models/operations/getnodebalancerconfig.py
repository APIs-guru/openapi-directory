from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetNodeBalancerConfigPathParams:
    config_id: int = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeBalancerConfigSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetNodeBalancerConfigSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetNodeBalancerConfigSecurity:
    option1: Optional[GetNodeBalancerConfigSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetNodeBalancerConfigSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetNodeBalancerConfigRequest:
    path_params: GetNodeBalancerConfigPathParams = field(default=None)
    security: GetNodeBalancerConfigSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetNodeBalancerConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetNodeBalancerConfigResponse:
    content_type: str = field(default=None)
    node_balancer_config: Optional[shared.NodeBalancerConfig] = field(default=None)
    status_code: int = field(default=None)
    get_node_balancer_config_default_application_json_object: Optional[GetNodeBalancerConfigDefaultApplicationJSON] = field(default=None)
    
