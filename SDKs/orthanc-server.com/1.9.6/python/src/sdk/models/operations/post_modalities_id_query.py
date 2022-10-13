from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDQueryPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDQueryRequest:
    path_params: PostModalitiesIDQueryPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostModalitiesIDQueryResponse:
    content_type: str = field(default=None)
    post_modalities_id_query_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
