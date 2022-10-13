from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAppsAppIDPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsAppIDQueryParams:
    track_views: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'trackViews', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAppsAppIDRequest:
    path_params: GetAppsAppIDPathParams = field(default=None)
    query_params: GetAppsAppIDQueryParams = field(default=None)
    

@dataclass
class GetAppsAppIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
