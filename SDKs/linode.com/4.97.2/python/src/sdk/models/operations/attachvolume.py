from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AttachVolumePathParams:
    volume_id: int = field(metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AttachVolumeRequestBody:
    linode_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linode_id') }})
    config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_id') }})
    persist_across_boots: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persist_across_boots') }})
    

@dataclass
class AttachVolumeSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class AttachVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class AttachVolumeRequest:
    path_params: AttachVolumePathParams = field()
    request: AttachVolumeRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AttachVolumeSecurity = field()
    

@dataclass
class AttachVolumeResponse:
    content_type: str = field()
    status_code: int = field()
    volume: Optional[shared.Volume] = field(default=None)
    attach_volume_default_application_json_object: Optional[AttachVolumeDefaultApplicationJSON] = field(default=None)
    
