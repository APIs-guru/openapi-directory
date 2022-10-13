from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateNodeBalancerNodePathParams:
    config_id: int = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    
class CreateNodeBalancerNodeRequestBodyModeEnum(str, Enum):
    ACCEPT = "accept"
    REJECT = "reject"
    DRAIN = "drain"
    BACKUP = "backup"

class CreateNodeBalancerNodeRequestBodyStatusEnum(str, Enum):
    UNKNOWN = "unknown"
    UP = "UP"
    DOWN = "DOWN"


@dataclass_json
@dataclass
class CreateNodeBalancerNodeRequestBody:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_id' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    mode: Optional[CreateNodeBalancerNodeRequestBodyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    nodebalancer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodebalancer_id' }})
    status: Optional[CreateNodeBalancerNodeRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    

@dataclass
class CreateNodeBalancerNodeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateNodeBalancerNodeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateNodeBalancerNodeSecurity:
    option1: Optional[CreateNodeBalancerNodeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateNodeBalancerNodeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateNodeBalancerNodeRequest:
    path_params: CreateNodeBalancerNodePathParams = field(default=None)
    request: CreateNodeBalancerNodeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateNodeBalancerNodeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateNodeBalancerNodeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateNodeBalancerNodeResponse:
    content_type: str = field(default=None)
    node_balancer_node: Optional[shared.NodeBalancerNode] = field(default=None)
    status_code: int = field(default=None)
    create_node_balancer_node_default_application_json_object: Optional[CreateNodeBalancerNodeDefaultApplicationJSON] = field(default=None)
    
