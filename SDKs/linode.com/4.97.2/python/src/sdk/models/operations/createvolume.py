from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateVolumeRequestBody:
    config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    linode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linode_id' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateVolumeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateVolumeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateVolumeSecurity:
    option1: Optional[CreateVolumeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateVolumeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateVolumeRequest:
    request: CreateVolumeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateVolumeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateVolumeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volume: Optional[shared.Volume] = field(default=None)
    create_volume_default_application_json_object: Optional[CreateVolumeDefaultApplicationJSON] = field(default=None)
    
