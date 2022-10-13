from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAppsBySafeNameSafeNamePathParams:
    safe_name: str = field(default=None, metadata={'path_param': { 'field_name': 'safeName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsBySafeNameSafeNameQueryParams:
    track_views: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'trackViews', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAppsBySafeNameSafeNameRequest:
    path_params: GetAppsBySafeNameSafeNamePathParams = field(default=None)
    query_params: GetAppsBySafeNameSafeNameQueryParams = field(default=None)
    

@dataclass
class GetAppsBySafeNameSafeNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
