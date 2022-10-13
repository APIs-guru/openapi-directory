from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ResizeDiskPathParams:
    disk_id: int = field(default=None, metadata={'path_param': { 'field_name': 'diskId', 'style': 'simple', 'explode': False }})
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResizeDiskSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ResizeDiskSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResizeDiskSecurity:
    option1: Optional[ResizeDiskSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ResizeDiskSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ResizeDiskRequest:
    path_params: ResizeDiskPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ResizeDiskSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ResizeDiskDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ResizeDiskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    resize_disk_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    resize_disk_default_application_json_object: Optional[ResizeDiskDefaultApplicationJSON] = field(default=None)
    
