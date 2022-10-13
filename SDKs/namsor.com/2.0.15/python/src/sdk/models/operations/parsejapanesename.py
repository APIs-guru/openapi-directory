from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ParseJapaneseNamePathParams:
    japanese_name: str = field(default=None, metadata={'path_param': { 'field_name': 'japaneseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ParseJapaneseNameSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ParseJapaneseNameRequest:
    path_params: ParseJapaneseNamePathParams = field(default=None)
    security: ParseJapaneseNameSecurity = field(default=None)
    

@dataclass
class ParseJapaneseNameResponse:
    content_type: str = field(default=None)
    personal_name_parsed_out: Optional[shared.PersonalNameParsedOut] = field(default=None)
    status_code: int = field(default=None)
    
