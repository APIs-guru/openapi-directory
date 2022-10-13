from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChineseNameMatchPathParams:
    chinese_given_name_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'chineseGivenNameLatin', 'style': 'simple', 'explode': False }})
    chinese_name: str = field(default=None, metadata={'path_param': { 'field_name': 'chineseName', 'style': 'simple', 'explode': False }})
    chinese_surname_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'chineseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChineseNameMatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ChineseNameMatchRequest:
    path_params: ChineseNameMatchPathParams = field(default=None)
    security: ChineseNameMatchSecurity = field(default=None)
    

@dataclass
class ChineseNameMatchResponse:
    content_type: str = field(default=None)
    name_matched_out: Optional[shared.NameMatchedOut] = field(default=None)
    status_code: int = field(default=None)
    
