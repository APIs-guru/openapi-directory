from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateVolumeRequestBody:
    config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    linode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linode_id') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateVolumeSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateVolumeRequest:
    request: CreateVolumeRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateVolumeSecurity = field()
    

@dataclass
class CreateVolumeResponse:
    content_type: str = field()
    status_code: int = field()
    volume: Optional[shared.Volume] = field(default=None)
    create_volume_default_application_json_object: Optional[CreateVolumeDefaultApplicationJSON] = field(default=None)
    
