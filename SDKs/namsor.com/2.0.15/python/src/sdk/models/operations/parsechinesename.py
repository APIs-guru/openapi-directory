from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ParseChineseNamePathParams:
    chinese_name: str = field(metadata={'path_param': { 'field_name': 'chineseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ParseChineseNameSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ParseChineseNameRequest:
    path_params: ParseChineseNamePathParams = field()
    security: ParseChineseNameSecurity = field()
    

@dataclass
class ParseChineseNameResponse:
    content_type: str = field()
    status_code: int = field()
    personal_name_parsed_out: Optional[shared.PersonalNameParsedOut] = field(default=None)
    
