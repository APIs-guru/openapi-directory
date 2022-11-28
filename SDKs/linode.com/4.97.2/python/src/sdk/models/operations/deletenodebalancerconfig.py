from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteNodeBalancerConfigPathParams:
    config_id: int = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNodeBalancerConfigSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteNodeBalancerConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteNodeBalancerConfigRequest:
    path_params: DeleteNodeBalancerConfigPathParams = field()
    security: DeleteNodeBalancerConfigSecurity = field()
    

@dataclass
class DeleteNodeBalancerConfigResponse:
    content_type: str = field()
    status_code: int = field()
    delete_node_balancer_config_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_node_balancer_config_default_application_json_object: Optional[DeleteNodeBalancerConfigDefaultApplicationJSON] = field(default=None)
    
