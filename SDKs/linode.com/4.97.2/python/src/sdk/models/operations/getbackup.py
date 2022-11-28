from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetBackupPathParams:
    backup_id: int = field(metadata={'path_param': { 'field_name': 'backupId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBackupSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetBackupDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetBackupRequest:
    path_params: GetBackupPathParams = field()
    security: GetBackupSecurity = field()
    

@dataclass
class GetBackupResponse:
    content_type: str = field()
    status_code: int = field()
    backup: Optional[shared.Backup] = field(default=None)
    get_backup_default_application_json_object: Optional[GetBackupDefaultApplicationJSON] = field(default=None)
    
