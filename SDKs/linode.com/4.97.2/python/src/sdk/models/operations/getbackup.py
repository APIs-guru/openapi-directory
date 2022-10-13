from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetBackupPathParams:
    backup_id: int = field(default=None, metadata={'path_param': { 'field_name': 'backupId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBackupSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetBackupSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetBackupSecurity:
    option1: Optional[GetBackupSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetBackupSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetBackupRequest:
    path_params: GetBackupPathParams = field(default=None)
    security: GetBackupSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetBackupDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetBackupResponse:
    backup: Optional[shared.Backup] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_backup_default_application_json_object: Optional[GetBackupDefaultApplicationJSON] = field(default=None)
    
