from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostPatientsIDModifyPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPatientsIDModifyRequest:
    path_params: PostPatientsIDModifyPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPatientsIDModifyResponse:
    content_type: str = field()
    status_code: int = field()
    post_patients_id_modify_200_application_json_any: Optional[Any] = field(default=None)
    
