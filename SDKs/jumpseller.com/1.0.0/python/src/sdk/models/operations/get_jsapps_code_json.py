from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJsappsCodeJSONPathParams:
    code: str = field(metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJsappsCodeJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJsappsCodeJSONRequest:
    path_params: GetJsappsCodeJSONPathParams = field()
    query_params: GetJsappsCodeJSONQueryParams = field()
    

@dataclass
class GetJsappsCodeJSONResponse:
    content_type: str = field()
    status_code: int = field()
    js_app: Optional[shared.JsApp] = field(default=None)
    
