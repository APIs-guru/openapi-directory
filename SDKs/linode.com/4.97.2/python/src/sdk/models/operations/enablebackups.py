from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnableBackupsPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableBackupsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class EnableBackupsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class EnableBackupsRequest:
    path_params: EnableBackupsPathParams = field()
    security: EnableBackupsSecurity = field()
    

@dataclass
class EnableBackupsResponse:
    content_type: str = field()
    status_code: int = field()
    enable_backups_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    enable_backups_default_application_json_object: Optional[EnableBackupsDefaultApplicationJSON] = field(default=None)
    
