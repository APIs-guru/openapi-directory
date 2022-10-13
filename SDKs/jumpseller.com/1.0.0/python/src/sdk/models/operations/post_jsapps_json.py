from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostJsappsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostJsappsJSONRequest:
    query_params: PostJsappsJSONQueryParams = field(default=None)
    request: shared.JsAppEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostJsappsJSONResponse:
    content_type: str = field(default=None)
    js_app: Optional[shared.JsApp] = field(default=None)
    status_code: int = field(default=None)
    
