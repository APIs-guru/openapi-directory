from dataclasses import dataclass, field



@dataclass
class DeletePermissionAppsAppIDPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePermissionAppsAppIDQueryParams:
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeletePermissionAppsAppIDRequest:
    path_params: DeletePermissionAppsAppIDPathParams = field()
    query_params: DeletePermissionAppsAppIDQueryParams = field()
    

@dataclass
class DeletePermissionAppsAppIDResponse:
    content_type: str = field()
    status_code: int = field()
    
