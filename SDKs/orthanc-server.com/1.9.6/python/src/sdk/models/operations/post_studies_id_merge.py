from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostStudiesIDMergePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStudiesIDMergeRequest:
    path_params: PostStudiesIDMergePathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostStudiesIDMergeResponse:
    content_type: str = field(default=None)
    post_studies_id_merge_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
