from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLinodeDiskPathParams:
    disk_id: int = field(metadata={'path_param': { 'field_name': 'diskId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeDiskSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLinodeDiskDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLinodeDiskRequest:
    path_params: GetLinodeDiskPathParams = field()
    security: GetLinodeDiskSecurity = field()
    

@dataclass
class GetLinodeDiskResponse:
    content_type: str = field()
    status_code: int = field()
    disk: Optional[shared.Disk] = field(default=None)
    get_linode_disk_default_application_json_object: Optional[GetLinodeDiskDefaultApplicationJSON] = field(default=None)
    
