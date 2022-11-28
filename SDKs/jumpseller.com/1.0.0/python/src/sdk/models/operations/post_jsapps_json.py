from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostJsappsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostJsappsJSONRequest:
    query_params: PostJsappsJSONQueryParams = field()
    request: shared.JsAppEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostJsappsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    js_app: Optional[shared.JsApp] = field(default=None)
    
