from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAppsBySafeNameSafeNamePathParams:
    safe_name: str = field(metadata={'path_param': { 'field_name': 'safeName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsBySafeNameSafeNameQueryParams:
    track_views: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'trackViews', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAppsBySafeNameSafeNameRequest:
    path_params: GetAppsBySafeNameSafeNamePathParams = field()
    query_params: GetAppsBySafeNameSafeNameQueryParams = field()
    

@dataclass
class GetAppsBySafeNameSafeNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
