from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddLinodeDiskPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddLinodeDiskSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class AddLinodeDiskDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class AddLinodeDiskRequest:
    path_params: AddLinodeDiskPathParams = field()
    request: shared.DiskRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddLinodeDiskSecurity = field()
    

@dataclass
class AddLinodeDiskResponse:
    content_type: str = field()
    status_code: int = field()
    disk: Optional[shared.Disk] = field(default=None)
    add_linode_disk_default_application_json_object: Optional[AddLinodeDiskDefaultApplicationJSON] = field(default=None)
    
