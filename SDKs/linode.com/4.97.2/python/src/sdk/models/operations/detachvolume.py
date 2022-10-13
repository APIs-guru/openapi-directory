from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DetachVolumePathParams:
    volume_id: int = field(default=None, metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DetachVolumeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DetachVolumeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DetachVolumeSecurity:
    option1: Optional[DetachVolumeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DetachVolumeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DetachVolumeRequest:
    path_params: DetachVolumePathParams = field(default=None)
    security: DetachVolumeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DetachVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DetachVolumeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    detach_volume_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    detach_volume_default_application_json_object: Optional[DetachVolumeDefaultApplicationJSON] = field(default=None)
    
