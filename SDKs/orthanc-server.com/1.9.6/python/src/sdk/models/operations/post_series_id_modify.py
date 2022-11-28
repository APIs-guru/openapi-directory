from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostSeriesIDModifyPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSeriesIDModifyRequest:
    path_params: PostSeriesIDModifyPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSeriesIDModifyResponse:
    content_type: str = field()
    status_code: int = field()
    post_series_id_modify_200_application_json_any: Optional[Any] = field(default=None)
    
