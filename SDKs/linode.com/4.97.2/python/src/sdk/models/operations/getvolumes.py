from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetVolumesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVolumesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVolumesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetVolumesSecurity:
    option1: Optional[GetVolumesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetVolumesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetVolumesRequest:
    query_params: GetVolumesQueryParams = field(default=None)
    security: GetVolumesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetVolumes200ApplicationJSON:
    data: Optional[List[shared.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetVolumesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetVolumesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_volumes_200_application_json_object: Optional[GetVolumes200ApplicationJSON] = field(default=None)
    get_volumes_default_application_json_object: Optional[GetVolumesDefaultApplicationJSON] = field(default=None)
    
