from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TypeaheadQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    safe_mode: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'safe_mode', 'style': 'form', 'explode': True }})
    show_genres: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'show_genres', 'style': 'form', 'explode': True }})
    show_podcasts: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'show_podcasts', 'style': 'form', 'explode': True }})
    

@dataclass
class TypeaheadHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class TypeaheadRequest:
    headers: TypeaheadHeaders = field()
    query_params: TypeaheadQueryParams = field()
    

@dataclass
class TypeaheadResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    typeahead_response: Optional[shared.TypeaheadResponse] = field(default=None)
    
