from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostSeriesIDAnonymizePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSeriesIDAnonymizeRequest:
    path_params: PostSeriesIDAnonymizePathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSeriesIDAnonymizeResponse:
    content_type: str = field(default=None)
    post_series_id_anonymize_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
