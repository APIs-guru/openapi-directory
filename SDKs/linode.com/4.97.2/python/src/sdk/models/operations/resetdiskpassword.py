from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ResetDiskPasswordPathParams:
    disk_id: int = field(metadata={'path_param': { 'field_name': 'diskId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetDiskPasswordSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class ResetDiskPasswordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class ResetDiskPasswordRequest:
    path_params: ResetDiskPasswordPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ResetDiskPasswordSecurity = field()
    

@dataclass
class ResetDiskPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    reset_disk_password_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    reset_disk_password_default_application_json_object: Optional[ResetDiskPasswordDefaultApplicationJSON] = field(default=None)
    
