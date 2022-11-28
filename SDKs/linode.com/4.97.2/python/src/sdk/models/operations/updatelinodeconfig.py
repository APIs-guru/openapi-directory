from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateLinodeConfigPathParams:
    config_id: int = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLinodeConfigSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateLinodeConfigDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateLinodeConfigRequest:
    path_params: UpdateLinodeConfigPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLinodeConfigSecurity = field()
    

@dataclass
class UpdateLinodeConfigResponse:
    content_type: str = field()
    status_code: int = field()
    linode_config: Optional[shared.LinodeConfig] = field(default=None)
    update_linode_config_default_application_json_object: Optional[UpdateLinodeConfigDefaultApplicationJSON] = field(default=None)
    
