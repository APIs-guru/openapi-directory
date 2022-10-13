from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetGenresQueryParams:
    top_level_only: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'top_level_only', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGenresHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenresRequest:
    query_params: GetGenresQueryParams = field(default=None)
    headers: GetGenresHeaders = field(default=None)
    

@dataclass
class GetGenresResponse:
    content_type: str = field(default=None)
    get_genres_response: Optional[shared.GetGenresResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
