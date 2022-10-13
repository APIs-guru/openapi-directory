from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderChineseNamePinyinPathParams:
    chinese_given_name_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'chineseGivenNameLatin', 'style': 'simple', 'explode': False }})
    chinese_surname_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'chineseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenderChineseNamePinyinSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderChineseNamePinyinRequest:
    path_params: GenderChineseNamePinyinPathParams = field(default=None)
    security: GenderChineseNamePinyinSecurity = field(default=None)
    

@dataclass
class GenderChineseNamePinyinResponse:
    content_type: str = field(default=None)
    first_last_name_gendered_out: Optional[shared.FirstLastNameGenderedOut] = field(default=None)
    status_code: int = field(default=None)
    
