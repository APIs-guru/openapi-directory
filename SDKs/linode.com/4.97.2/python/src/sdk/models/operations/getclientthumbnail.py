from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetClientThumbnailPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClientThumbnailRequest:
    path_params: GetClientThumbnailPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetClientThumbnailDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetClientThumbnailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_client_thumbnail_200_image_png_binary_string: Optional[bytes] = field(default=None)
    get_client_thumbnail_default_application_json_object: Optional[GetClientThumbnailDefaultApplicationJSON] = field(default=None)
    
