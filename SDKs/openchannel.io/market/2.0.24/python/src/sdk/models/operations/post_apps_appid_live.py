from dataclasses import dataclass, field



@dataclass
class PostAppsAppIDLivePathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsAppIDLiveQueryParams:
    developer_id: str = field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    version: str = field(metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAppsAppIDLiveRequest:
    path_params: PostAppsAppIDLivePathParams = field()
    query_params: PostAppsAppIDLiveQueryParams = field()
    

@dataclass
class PostAppsAppIDLiveResponse:
    content_type: str = field()
    status_code: int = field()
    
