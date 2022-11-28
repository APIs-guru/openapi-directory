from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveApplicationPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveApplicationQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveApplicationRequest:
    path_params: RetrieveApplicationPathParams = field()
    query_params: RetrieveApplicationQueryParams = field()
    

@dataclass
class RetrieveApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    application: Optional[shared.Application] = field(default=None)
    
