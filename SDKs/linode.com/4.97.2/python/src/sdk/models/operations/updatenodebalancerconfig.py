from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateNodeBalancerConfigPathParams:
    config_id: int = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNodeBalancerConfigSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateNodeBalancerConfigSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateNodeBalancerConfigSecurity:
    option1: Optional[UpdateNodeBalancerConfigSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateNodeBalancerConfigSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateNodeBalancerConfigRequest:
    path_params: UpdateNodeBalancerConfigPathParams = field(default=None)
    request: shared.NodeBalancerConfig = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateNodeBalancerConfigSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateNodeBalancerConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateNodeBalancerConfigResponse:
    content_type: str = field(default=None)
    node_balancer_config: Optional[shared.NodeBalancerConfig] = field(default=None)
    status_code: int = field(default=None)
    update_node_balancer_config_default_application_json_object: Optional[UpdateNodeBalancerConfigDefaultApplicationJSON] = field(default=None)
    
