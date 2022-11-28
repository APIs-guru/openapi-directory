from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateNodeBalancerConfigPathParams:
    config_id: int = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNodeBalancerConfigSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateNodeBalancerConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateNodeBalancerConfigRequest:
    path_params: UpdateNodeBalancerConfigPathParams = field()
    request: shared.NodeBalancerConfigInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateNodeBalancerConfigSecurity = field()
    

@dataclass
class UpdateNodeBalancerConfigResponse:
    content_type: str = field()
    status_code: int = field()
    node_balancer_config: Optional[shared.NodeBalancerConfig] = field(default=None)
    update_node_balancer_config_default_application_json_object: Optional[UpdateNodeBalancerConfigDefaultApplicationJSON] = field(default=None)
    
