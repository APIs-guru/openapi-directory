from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ParseChineseNamePathParams:
    chinese_name: str = field(default=None, metadata={'path_param': { 'field_name': 'chineseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ParseChineseNameSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ParseChineseNameRequest:
    path_params: ParseChineseNamePathParams = field(default=None)
    security: ParseChineseNameSecurity = field(default=None)
    

@dataclass
class ParseChineseNameResponse:
    content_type: str = field(default=None)
    personal_name_parsed_out: Optional[shared.PersonalNameParsedOut] = field(default=None)
    status_code: int = field(default=None)
    
