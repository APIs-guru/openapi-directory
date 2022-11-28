from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPermissionAppsAppIDPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPermissionAppsAppIDQueryParams:
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPermissionAppsAppIDRequest:
    path_params: GetPermissionAppsAppIDPathParams = field()
    query_params: GetPermissionAppsAppIDQueryParams = field()
    

@dataclass
class GetPermissionAppsAppIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
