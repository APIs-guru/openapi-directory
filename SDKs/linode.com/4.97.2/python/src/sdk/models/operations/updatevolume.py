from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateVolumePathParams:
    volume_id: int = field(metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateVolumeRequestBodyInput:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class UpdateVolumeSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateVolumeRequest:
    path_params: UpdateVolumePathParams = field()
    request: UpdateVolumeRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateVolumeSecurity = field()
    

@dataclass
class UpdateVolumeResponse:
    content_type: str = field()
    status_code: int = field()
    volume: Optional[shared.Volume] = field(default=None)
    update_volume_default_application_json_object: Optional[UpdateVolumeDefaultApplicationJSON] = field(default=None)
    
