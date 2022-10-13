from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteVolumePathParams:
    volume_id: int = field(default=None, metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVolumeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteVolumeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVolumeSecurity:
    option1: Optional[DeleteVolumeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteVolumeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteVolumeRequest:
    path_params: DeleteVolumePathParams = field(default=None)
    security: DeleteVolumeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteVolumeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_volume_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_volume_default_application_json_object: Optional[DeleteVolumeDefaultApplicationJSON] = field(default=None)
    
