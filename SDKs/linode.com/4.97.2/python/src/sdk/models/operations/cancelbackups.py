from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CancelBackupsPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelBackupsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CancelBackupsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelBackupsSecurity:
    option1: Optional[CancelBackupsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CancelBackupsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CancelBackupsRequest:
    path_params: CancelBackupsPathParams = field(default=None)
    security: CancelBackupsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CancelBackupsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CancelBackupsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    cancel_backups_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    cancel_backups_default_application_json_object: Optional[CancelBackupsDefaultApplicationJSON] = field(default=None)
    
