from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetThemeSongsPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThemeSongsQueryParams:
    inherit_from_parent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inheritFromParent', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetThemeSongsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetThemeSongsRequest:
    path_params: GetThemeSongsPathParams = field()
    query_params: GetThemeSongsQueryParams = field()
    security: GetThemeSongsSecurity = field()
    

@dataclass
class GetThemeSongsResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    theme_media_result: Optional[shared.ThemeMediaResult] = field(default=None)
    
