from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteLinodeConfigPathParams:
    config_id: int = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLinodeConfigSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteLinodeConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteLinodeConfigRequest:
    path_params: DeleteLinodeConfigPathParams = field()
    security: DeleteLinodeConfigSecurity = field()
    

@dataclass
class DeleteLinodeConfigResponse:
    content_type: str = field()
    status_code: int = field()
    delete_linode_config_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_linode_config_default_application_json_object: Optional[DeleteLinodeConfigDefaultApplicationJSON] = field(default=None)
    
