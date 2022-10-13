from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostSeriesIDMediaPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSeriesIDMediaRequest:
    path_params: PostSeriesIDMediaPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSeriesIDMediaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    post_series_id_media_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
