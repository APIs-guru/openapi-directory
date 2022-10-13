from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ResetDiskPasswordPathParams:
    disk_id: int = field(default=None, metadata={'path_param': { 'field_name': 'diskId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetDiskPasswordSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ResetDiskPasswordSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResetDiskPasswordSecurity:
    option1: Optional[ResetDiskPasswordSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ResetDiskPasswordSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ResetDiskPasswordRequest:
    path_params: ResetDiskPasswordPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ResetDiskPasswordSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ResetDiskPasswordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ResetDiskPasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reset_disk_password_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    reset_disk_password_default_application_json_object: Optional[ResetDiskPasswordDefaultApplicationJSON] = field(default=None)
    
