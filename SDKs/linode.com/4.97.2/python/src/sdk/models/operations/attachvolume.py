from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AttachVolumePathParams:
    volume_id: int = field(default=None, metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AttachVolumeRequestBody:
    config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_id' }})
    linode_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linode_id' }})
    persist_across_boots: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persist_across_boots' }})
    

@dataclass
class AttachVolumeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AttachVolumeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AttachVolumeSecurity:
    option1: Optional[AttachVolumeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AttachVolumeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AttachVolumeRequest:
    path_params: AttachVolumePathParams = field(default=None)
    request: AttachVolumeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AttachVolumeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class AttachVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class AttachVolumeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volume: Optional[shared.Volume] = field(default=None)
    attach_volume_default_application_json_object: Optional[AttachVolumeDefaultApplicationJSON] = field(default=None)
    
