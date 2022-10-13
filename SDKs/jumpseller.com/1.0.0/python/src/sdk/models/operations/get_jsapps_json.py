from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJsappsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJsappsJSONRequest:
    query_params: GetJsappsJSONQueryParams = field(default=None)
    

@dataclass
class GetJsappsJSONResponse:
    app: Optional[shared.App] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
