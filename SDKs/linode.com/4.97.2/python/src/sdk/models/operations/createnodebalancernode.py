from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateNodeBalancerNodePathParams:
    config_id: int = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    
class CreateNodeBalancerNodeRequestBodyModeEnum(str, Enum):
    ACCEPT = "accept"
    REJECT = "reject"
    DRAIN = "drain"
    BACKUP = "backup"


@dataclass_json
@dataclass
class CreateNodeBalancerNodeRequestBodyInput:
    address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    mode: Optional[CreateNodeBalancerNodeRequestBodyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    

@dataclass
class CreateNodeBalancerNodeSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateNodeBalancerNodeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateNodeBalancerNodeRequest:
    path_params: CreateNodeBalancerNodePathParams = field()
    request: CreateNodeBalancerNodeRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateNodeBalancerNodeSecurity = field()
    

@dataclass
class CreateNodeBalancerNodeResponse:
    content_type: str = field()
    status_code: int = field()
    node_balancer_node: Optional[shared.NodeBalancerNode] = field(default=None)
    create_node_balancer_node_default_application_json_object: Optional[CreateNodeBalancerNodeDefaultApplicationJSON] = field(default=None)
    
