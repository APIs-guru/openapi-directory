from dataclasses import dataclass, field



@dataclass
class DeletePermissionAppsAppIDPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePermissionAppsAppIDQueryParams:
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeletePermissionAppsAppIDRequest:
    path_params: DeletePermissionAppsAppIDPathParams = field(default=None)
    query_params: DeletePermissionAppsAppIDQueryParams = field(default=None)
    

@dataclass
class DeletePermissionAppsAppIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
