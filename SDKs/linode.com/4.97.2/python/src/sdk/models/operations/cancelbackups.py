from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CancelBackupsPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelBackupsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CancelBackupsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CancelBackupsRequest:
    path_params: CancelBackupsPathParams = field()
    security: CancelBackupsSecurity = field()
    

@dataclass
class CancelBackupsResponse:
    content_type: str = field()
    status_code: int = field()
    cancel_backups_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    cancel_backups_default_application_json_object: Optional[CancelBackupsDefaultApplicationJSON] = field(default=None)
    
