from dataclasses import dataclass, field



@dataclass
class DeleteAppsAppIDPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAppsAppIDQueryParams:
    developer_id: str = field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAppsAppIDRequest:
    path_params: DeleteAppsAppIDPathParams = field(default=None)
    query_params: DeleteAppsAppIDQueryParams = field(default=None)
    

@dataclass
class DeleteAppsAppIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
