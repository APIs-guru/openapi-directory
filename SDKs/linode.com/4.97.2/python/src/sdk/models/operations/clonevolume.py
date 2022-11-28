from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CloneVolumePathParams:
    volume_id: int = field(metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CloneVolumeRequestBody:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    

@dataclass
class CloneVolumeSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CloneVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CloneVolumeRequest:
    path_params: CloneVolumePathParams = field()
    request: CloneVolumeRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CloneVolumeSecurity = field()
    

@dataclass
class CloneVolumeResponse:
    content_type: str = field()
    status_code: int = field()
    volume: Optional[shared.Volume] = field(default=None)
    clone_volume_default_application_json_object: Optional[CloneVolumeDefaultApplicationJSON] = field(default=None)
    
