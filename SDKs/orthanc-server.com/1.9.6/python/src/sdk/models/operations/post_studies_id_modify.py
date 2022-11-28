from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostStudiesIDModifyPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStudiesIDModifyRequest:
    path_params: PostStudiesIDModifyPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostStudiesIDModifyResponse:
    content_type: str = field()
    status_code: int = field()
    post_studies_id_modify_200_application_json_any: Optional[Any] = field(default=None)
    
