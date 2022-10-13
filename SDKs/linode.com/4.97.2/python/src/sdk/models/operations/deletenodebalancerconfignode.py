from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteNodeBalancerConfigNodePathParams:
    config_id: int = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    node_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNodeBalancerConfigNodeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteNodeBalancerConfigNodeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteNodeBalancerConfigNodeSecurity:
    option1: Optional[DeleteNodeBalancerConfigNodeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteNodeBalancerConfigNodeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteNodeBalancerConfigNodeRequest:
    path_params: DeleteNodeBalancerConfigNodePathParams = field(default=None)
    security: DeleteNodeBalancerConfigNodeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteNodeBalancerConfigNodeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteNodeBalancerConfigNodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_node_balancer_config_node_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_node_balancer_config_node_default_application_json_object: Optional[DeleteNodeBalancerConfigNodeDefaultApplicationJSON] = field(default=None)
    
