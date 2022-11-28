from dataclasses import dataclass, field



@dataclass
class DeleteAppsAppIDPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAppsAppIDQueryParams:
    developer_id: str = field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAppsAppIDRequest:
    path_params: DeleteAppsAppIDPathParams = field()
    query_params: DeleteAppsAppIDQueryParams = field()
    

@dataclass
class DeleteAppsAppIDResponse:
    content_type: str = field()
    status_code: int = field()
    
