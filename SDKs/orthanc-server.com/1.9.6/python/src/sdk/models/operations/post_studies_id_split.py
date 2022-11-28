from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostStudiesIDSplitPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStudiesIDSplitRequest:
    path_params: PostStudiesIDSplitPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostStudiesIDSplitResponse:
    content_type: str = field()
    status_code: int = field()
    post_studies_id_split_200_application_json_any: Optional[Any] = field(default=None)
    
