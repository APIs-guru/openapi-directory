from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateVolumePathParams:
    volume_id: int = field(default=None, metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    
class UpdateVolumeRequestBodyStatusEnum(str, Enum):
    CREATING = "creating"
    ACTIVE = "active"
    RESIZING = "resizing"
    CONTACT_SUPPORT = "contact_support"


@dataclass_json
@dataclass
class UpdateVolumeRequestBody:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filesystem_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesystem_path' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    linode_id: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linode_id' }})
    linode_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linode_label' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[UpdateVolumeRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass
class UpdateVolumeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateVolumeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateVolumeSecurity:
    option1: Optional[UpdateVolumeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateVolumeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateVolumeRequest:
    path_params: UpdateVolumePathParams = field(default=None)
    request: UpdateVolumeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateVolumeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateVolumeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volume: Optional[shared.Volume] = field(default=None)
    update_volume_default_application_json_object: Optional[UpdateVolumeDefaultApplicationJSON] = field(default=None)
    
