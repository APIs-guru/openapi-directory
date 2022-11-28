from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJsappsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJsappsJSONRequest:
    query_params: GetJsappsJSONQueryParams = field()
    

@dataclass
class GetJsappsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    app: Optional[shared.App] = field(default=None)
    
