from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetThemeMediaPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThemeMediaQueryParams:
    inherit_from_parent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inheritFromParent', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetThemeMediaSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetThemeMediaRequest:
    path_params: GetThemeMediaPathParams = field()
    query_params: GetThemeMediaQueryParams = field()
    security: GetThemeMediaSecurity = field()
    

@dataclass
class GetThemeMediaResponse:
    content_type: str = field()
    status_code: int = field()
    all_theme_media_result: Optional[shared.AllThemeMediaResult] = field(default=None)
    
