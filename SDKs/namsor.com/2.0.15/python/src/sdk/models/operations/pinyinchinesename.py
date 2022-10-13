from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PinyinChineseNamePathParams:
    chinese_name: str = field(default=None, metadata={'path_param': { 'field_name': 'chineseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PinyinChineseNameSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PinyinChineseNameRequest:
    path_params: PinyinChineseNamePathParams = field(default=None)
    security: PinyinChineseNameSecurity = field(default=None)
    

@dataclass
class PinyinChineseNameResponse:
    content_type: str = field(default=None)
    personal_name_parsed_out: Optional[shared.PersonalNameParsedOut] = field(default=None)
    status_code: int = field(default=None)
    
