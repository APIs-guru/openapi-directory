from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostAppsAppIDVersionsVersionPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsAppIDVersionsVersionQueryParams:
    developer_id: str = field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    access: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': True }})
    allow: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allow', 'style': 'form', 'explode': True }})
    approval_required: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'approvalRequired', 'style': 'form', 'explode': True }})
    attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'attributes', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    restrict: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'restrict', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAppsAppIDVersionsVersionRequest:
    path_params: PostAppsAppIDVersionsVersionPathParams = field()
    query_params: PostAppsAppIDVersionsVersionQueryParams = field()
    

@dataclass
class PostAppsAppIDVersionsVersionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
