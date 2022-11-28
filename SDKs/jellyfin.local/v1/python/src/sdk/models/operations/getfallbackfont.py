from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFallbackFontPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFallbackFontSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFallbackFontRequest:
    path_params: GetFallbackFontPathParams = field()
    security: GetFallbackFontSecurity = field()
    

@dataclass
class GetFallbackFontResponse:
    content_type: str = field()
    status_code: int = field()
    get_fallback_font_200_font_wildcard_binary_string: Optional[bytes] = field(default=None)
    
