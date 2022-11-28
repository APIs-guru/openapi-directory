from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DetachVolumePathParams:
    volume_id: int = field(metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DetachVolumeSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DetachVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DetachVolumeRequest:
    path_params: DetachVolumePathParams = field()
    security: DetachVolumeSecurity = field()
    

@dataclass
class DetachVolumeResponse:
    content_type: str = field()
    status_code: int = field()
    detach_volume_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    detach_volume_default_application_json_object: Optional[DetachVolumeDefaultApplicationJSON] = field(default=None)
    
