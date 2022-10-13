from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPermissionAppsAppIDPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPermissionAppsAppIDQueryParams:
    date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPermissionAppsAppIDRequest:
    path_params: PostPermissionAppsAppIDPathParams = field(default=None)
    query_params: PostPermissionAppsAppIDQueryParams = field(default=None)
    

@dataclass
class PostPermissionAppsAppIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
