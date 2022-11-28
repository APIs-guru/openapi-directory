from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RestoreBackupPathParams:
    backup_id: int = field(metadata={'path_param': { 'field_name': 'backupId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RestoreBackupRequestBody:
    linode_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linode_id') }})
    overwrite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overwrite') }})
    

@dataclass
class RestoreBackupSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class RestoreBackupDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class RestoreBackupRequest:
    path_params: RestoreBackupPathParams = field()
    request: RestoreBackupRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: RestoreBackupSecurity = field()
    

@dataclass
class RestoreBackupResponse:
    content_type: str = field()
    status_code: int = field()
    restore_backup_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    restore_backup_default_application_json_object: Optional[RestoreBackupDefaultApplicationJSON] = field(default=None)
    
