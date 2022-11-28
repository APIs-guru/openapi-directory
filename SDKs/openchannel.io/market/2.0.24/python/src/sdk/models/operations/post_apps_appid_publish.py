from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostAppsAppIDPublishPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsAppIDPublishQueryParams:
    developer_id: str = field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    version: int = field(metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    auto_approve: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'autoApprove', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAppsAppIDPublishRequest:
    path_params: PostAppsAppIDPublishPathParams = field()
    query_params: PostAppsAppIDPublishQueryParams = field()
    

@dataclass
class PostAppsAppIDPublishResponse:
    content_type: str = field()
    status_code: int = field()
    
