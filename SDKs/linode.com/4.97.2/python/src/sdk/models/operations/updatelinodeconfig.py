from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateLinodeConfigPathParams:
    config_id: int = field(default=None, metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLinodeConfigSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateLinodeConfigSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateLinodeConfigSecurity:
    option1: Optional[UpdateLinodeConfigSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateLinodeConfigSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateLinodeConfigRequest:
    path_params: UpdateLinodeConfigPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLinodeConfigSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateLinodeConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateLinodeConfigResponse:
    content_type: str = field(default=None)
    linode_config: Optional[shared.LinodeConfig] = field(default=None)
    status_code: int = field(default=None)
    update_linode_config_default_application_json_object: Optional[UpdateLinodeConfigDefaultApplicationJSON] = field(default=None)
    
