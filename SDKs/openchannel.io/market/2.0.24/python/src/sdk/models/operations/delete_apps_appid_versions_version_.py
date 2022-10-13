from dataclasses import dataclass, field



@dataclass
class DeleteAppsAppIDVersionsVersionPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAppsAppIDVersionsVersionQueryParams:
    developer_id: str = field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAppsAppIDVersionsVersionRequest:
    path_params: DeleteAppsAppIDVersionsVersionPathParams = field(default=None)
    query_params: DeleteAppsAppIDVersionsVersionQueryParams = field(default=None)
    

@dataclass
class DeleteAppsAppIDVersionsVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
