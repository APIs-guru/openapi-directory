from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostAppsAppIDPublishPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsAppIDPublishQueryParams:
    auto_approve: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'autoApprove', 'style': 'form', 'explode': True }})
    developer_id: str = field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    version: int = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAppsAppIDPublishRequest:
    path_params: PostAppsAppIDPublishPathParams = field(default=None)
    query_params: PostAppsAppIDPublishQueryParams = field(default=None)
    

@dataclass
class PostAppsAppIDPublishResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
