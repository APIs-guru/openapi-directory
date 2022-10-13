from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDiskPathParams:
    disk_id: int = field(default=None, metadata={'path_param': { 'field_name': 'diskId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDiskSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateDiskSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateDiskSecurity:
    option1: Optional[UpdateDiskSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateDiskSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateDiskRequest:
    path_params: UpdateDiskPathParams = field(default=None)
    request: shared.Disk = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDiskSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateDiskDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateDiskResponse:
    content_type: str = field(default=None)
    disk: Optional[shared.Disk] = field(default=None)
    status_code: int = field(default=None)
    update_disk_default_application_json_object: Optional[UpdateDiskDefaultApplicationJSON] = field(default=None)
    
