from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RestoreBackupPathParams:
    backup_id: int = field(default=None, metadata={'path_param': { 'field_name': 'backupId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RestoreBackupRequestBody:
    linode_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linode_id' }})
    overwrite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overwrite' }})
    

@dataclass
class RestoreBackupSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RestoreBackupSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RestoreBackupSecurity:
    option1: Optional[RestoreBackupSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[RestoreBackupSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class RestoreBackupRequest:
    path_params: RestoreBackupPathParams = field(default=None)
    request: RestoreBackupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RestoreBackupSecurity = field(default=None)
    

@dataclass_json
@dataclass
class RestoreBackupDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class RestoreBackupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    restore_backup_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    restore_backup_default_application_json_object: Optional[RestoreBackupDefaultApplicationJSON] = field(default=None)
    
