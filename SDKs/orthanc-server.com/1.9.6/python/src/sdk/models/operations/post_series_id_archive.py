from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostSeriesIDArchivePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSeriesIDArchiveRequest:
    path_params: PostSeriesIDArchivePathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSeriesIDArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    post_series_id_archive_200_application_json_any: Optional[Any] = field(default=None)
    
