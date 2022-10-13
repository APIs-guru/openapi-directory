from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CloneLinodeDiskPathParams:
    disk_id: int = field(default=None, metadata={'path_param': { 'field_name': 'diskId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloneLinodeDiskSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CloneLinodeDiskSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloneLinodeDiskSecurity:
    option1: Optional[CloneLinodeDiskSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloneLinodeDiskSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloneLinodeDiskRequest:
    path_params: CloneLinodeDiskPathParams = field(default=None)
    security: CloneLinodeDiskSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CloneLinodeDiskDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CloneLinodeDiskResponse:
    content_type: str = field(default=None)
    disk: Optional[shared.Disk] = field(default=None)
    status_code: int = field(default=None)
    clone_linode_disk_default_application_json_object: Optional[CloneLinodeDiskDefaultApplicationJSON] = field(default=None)
    
