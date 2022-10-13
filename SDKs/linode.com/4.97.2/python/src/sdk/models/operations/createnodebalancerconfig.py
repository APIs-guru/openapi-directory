from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateNodeBalancerConfigPathParams:
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNodeBalancerConfigSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateNodeBalancerConfigSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateNodeBalancerConfigSecurity:
    option1: Optional[CreateNodeBalancerConfigSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateNodeBalancerConfigSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateNodeBalancerConfigRequest:
    path_params: CreateNodeBalancerConfigPathParams = field(default=None)
    request: Optional[shared.NodeBalancerConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateNodeBalancerConfigSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateNodeBalancerConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateNodeBalancerConfigResponse:
    content_type: str = field(default=None)
    node_balancer_config: Optional[shared.NodeBalancerConfig] = field(default=None)
    status_code: int = field(default=None)
    create_node_balancer_config_default_application_json_object: Optional[CreateNodeBalancerConfigDefaultApplicationJSON] = field(default=None)
    
