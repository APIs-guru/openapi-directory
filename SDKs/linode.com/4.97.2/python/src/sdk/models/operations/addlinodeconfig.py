from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddLinodeConfigPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddLinodeConfigSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class AddLinodeConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class AddLinodeConfigRequest:
    path_params: AddLinodeConfigPathParams = field()
    request: shared.LinodeConfigInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddLinodeConfigSecurity = field()
    

@dataclass
class AddLinodeConfigResponse:
    content_type: str = field()
    status_code: int = field()
    linode_config: Optional[shared.LinodeConfig] = field(default=None)
    add_linode_config_default_application_json_object: Optional[AddLinodeConfigDefaultApplicationJSON] = field(default=None)
    
