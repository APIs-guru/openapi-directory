from dataclasses import dataclass, field



@dataclass
class PostAppsAppIDLivePathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsAppIDLiveQueryParams:
    developer_id: str = field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    version: str = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAppsAppIDLiveRequest:
    path_params: PostAppsAppIDLivePathParams = field(default=None)
    query_params: PostAppsAppIDLiveQueryParams = field(default=None)
    

@dataclass
class PostAppsAppIDLiveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
