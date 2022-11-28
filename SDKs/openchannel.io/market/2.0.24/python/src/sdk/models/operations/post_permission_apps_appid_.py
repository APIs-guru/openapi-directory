from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PostPermissionAppsAppIDPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPermissionAppsAppIDQueryParams:
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    date_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPermissionAppsAppIDRequest:
    path_params: PostPermissionAppsAppIDPathParams = field()
    query_params: PostPermissionAppsAppIDQueryParams = field()
    

@dataclass
class PostPermissionAppsAppIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
