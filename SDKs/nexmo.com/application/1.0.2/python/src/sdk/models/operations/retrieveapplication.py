from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveApplicationPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveApplicationQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(default=None, metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveApplicationRequest:
    path_params: RetrieveApplicationPathParams = field(default=None)
    query_params: RetrieveApplicationQueryParams = field(default=None)
    

@dataclass
class RetrieveApplicationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    application: Optional[shared.Application] = field(default=None)
    
