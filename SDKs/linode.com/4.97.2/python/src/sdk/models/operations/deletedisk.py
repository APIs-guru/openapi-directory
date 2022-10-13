from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteDiskPathParams:
    disk_id: int = field(default=None, metadata={'path_param': { 'field_name': 'diskId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDiskSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteDiskSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteDiskSecurity:
    option1: Optional[DeleteDiskSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteDiskSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteDiskRequest:
    path_params: DeleteDiskPathParams = field(default=None)
    security: DeleteDiskSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteDiskDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteDiskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_disk_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_disk_default_application_json_object: Optional[DeleteDiskDefaultApplicationJSON] = field(default=None)
    
