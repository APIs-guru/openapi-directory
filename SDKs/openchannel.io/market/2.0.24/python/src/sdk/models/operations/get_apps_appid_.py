from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAppsAppIDPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsAppIDQueryParams:
    track_views: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'trackViews', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAppsAppIDRequest:
    path_params: GetAppsAppIDPathParams = field()
    query_params: GetAppsAppIDQueryParams = field()
    

@dataclass
class GetAppsAppIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
