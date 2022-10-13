from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetThemeVideosPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThemeVideosQueryParams:
    inherit_from_parent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inheritFromParent', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetThemeVideosSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetThemeVideosRequest:
    path_params: GetThemeVideosPathParams = field(default=None)
    query_params: GetThemeVideosQueryParams = field(default=None)
    security: GetThemeVideosSecurity = field(default=None)
    

@dataclass
class GetThemeVideosResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    theme_media_result: Optional[shared.ThemeMediaResult] = field(default=None)
    
