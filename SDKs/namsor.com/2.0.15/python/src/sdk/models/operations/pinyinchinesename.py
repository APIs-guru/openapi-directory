from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PinyinChineseNamePathParams:
    chinese_name: str = field(metadata={'path_param': { 'field_name': 'chineseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PinyinChineseNameSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PinyinChineseNameRequest:
    path_params: PinyinChineseNamePathParams = field()
    security: PinyinChineseNameSecurity = field()
    

@dataclass
class PinyinChineseNameResponse:
    content_type: str = field()
    status_code: int = field()
    personal_name_parsed_out: Optional[shared.PersonalNameParsedOut] = field(default=None)
    
