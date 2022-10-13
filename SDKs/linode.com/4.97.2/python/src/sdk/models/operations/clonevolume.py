from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CloneVolumePathParams:
    volume_id: int = field(default=None, metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CloneVolumeRequestBody:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    

@dataclass
class CloneVolumeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CloneVolumeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloneVolumeSecurity:
    option1: Optional[CloneVolumeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloneVolumeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloneVolumeRequest:
    path_params: CloneVolumePathParams = field(default=None)
    request: CloneVolumeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CloneVolumeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CloneVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CloneVolumeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volume: Optional[shared.Volume] = field(default=None)
    clone_volume_default_application_json_object: Optional[CloneVolumeDefaultApplicationJSON] = field(default=None)
    
