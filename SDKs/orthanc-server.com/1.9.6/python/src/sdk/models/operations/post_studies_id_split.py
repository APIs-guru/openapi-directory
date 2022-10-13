from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostStudiesIDSplitPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStudiesIDSplitRequest:
    path_params: PostStudiesIDSplitPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostStudiesIDSplitResponse:
    content_type: str = field(default=None)
    post_studies_id_split_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
