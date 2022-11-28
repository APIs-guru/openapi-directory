from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateNodeBalancerNodePathParams:
    config_id: int = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    node_id: int = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNodeBalancerNodeSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateNodeBalancerNodeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateNodeBalancerNodeRequest:
    path_params: UpdateNodeBalancerNodePathParams = field()
    request: shared.NodeBalancerNodeInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateNodeBalancerNodeSecurity = field()
    

@dataclass
class UpdateNodeBalancerNodeResponse:
    content_type: str = field()
    status_code: int = field()
    node_balancer_node: Optional[shared.NodeBalancerNode] = field(default=None)
    update_node_balancer_node_default_application_json_object: Optional[UpdateNodeBalancerNodeDefaultApplicationJSON] = field(default=None)
    
