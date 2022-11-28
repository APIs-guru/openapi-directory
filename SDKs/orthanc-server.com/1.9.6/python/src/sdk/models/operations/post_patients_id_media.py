from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostPatientsIDMediaPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPatientsIDMediaRequest:
    path_params: PostPatientsIDMediaPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPatientsIDMediaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    post_patients_id_media_200_application_json_any: Optional[Any] = field(default=None)
    
