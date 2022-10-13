from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFallbackFontPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFallbackFontSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFallbackFontRequest:
    path_params: GetFallbackFontPathParams = field(default=None)
    security: GetFallbackFontSecurity = field(default=None)
    

@dataclass
class GetFallbackFontResponse:
    content_type: str = field(default=None)
    get_fallback_font_200_font_wildcard_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
