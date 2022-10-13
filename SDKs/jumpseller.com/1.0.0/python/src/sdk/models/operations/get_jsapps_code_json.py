from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJsappsCodeJSONPathParams:
    code: str = field(default=None, metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJsappsCodeJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJsappsCodeJSONRequest:
    path_params: GetJsappsCodeJSONPathParams = field(default=None)
    query_params: GetJsappsCodeJSONQueryParams = field(default=None)
    

@dataclass
class GetJsappsCodeJSONResponse:
    content_type: str = field(default=None)
    js_app: Optional[shared.JsApp] = field(default=None)
    status_code: int = field(default=None)
    
