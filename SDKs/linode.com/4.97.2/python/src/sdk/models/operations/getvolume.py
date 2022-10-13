from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetVolumePathParams:
    volume_id: int = field(default=None, metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumeQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVolumeSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVolumeSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetVolumeSecurity:
    option1: Optional[GetVolumeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetVolumeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetVolumeRequest:
    path_params: GetVolumePathParams = field(default=None)
    query_params: GetVolumeQueryParams = field(default=None)
    security: GetVolumeSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetVolumeDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetVolumeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volume: Optional[shared.Volume] = field(default=None)
    get_volume_default_application_json_object: Optional[GetVolumeDefaultApplicationJSON] = field(default=None)
    
