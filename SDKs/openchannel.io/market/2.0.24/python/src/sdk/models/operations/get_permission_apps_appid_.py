from dataclasses import dataclass, field



@dataclass
class GetPermissionAppsAppIDPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPermissionAppsAppIDQueryParams:
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPermissionAppsAppIDRequest:
    path_params: GetPermissionAppsAppIDPathParams = field(default=None)
    query_params: GetPermissionAppsAppIDQueryParams = field(default=None)
    

@dataclass
class GetPermissionAppsAppIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
