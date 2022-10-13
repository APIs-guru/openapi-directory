from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddLinodeDiskPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddLinodeDiskSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AddLinodeDiskSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddLinodeDiskSecurity:
    option1: Optional[AddLinodeDiskSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AddLinodeDiskSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AddLinodeDiskRequest:
    path_params: AddLinodeDiskPathParams = field(default=None)
    request: shared.DiskRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddLinodeDiskSecurity = field(default=None)
    

@dataclass_json
@dataclass
class AddLinodeDiskDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class AddLinodeDiskResponse:
    content_type: str = field(default=None)
    disk: Optional[shared.Disk] = field(default=None)
    status_code: int = field(default=None)
    add_linode_disk_default_application_json_object: Optional[AddLinodeDiskDefaultApplicationJSON] = field(default=None)
    
