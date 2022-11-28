from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetGenresQueryParams:
    top_level_only: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'top_level_only', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGenresHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenresRequest:
    headers: GetGenresHeaders = field()
    query_params: GetGenresQueryParams = field()
    

@dataclass
class GetGenresResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_genres_response: Optional[shared.GetGenresResponse] = field(default=None)
    
