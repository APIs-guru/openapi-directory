from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ParseJapaneseNamePathParams:
    japanese_name: str = field(metadata={'path_param': { 'field_name': 'japaneseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ParseJapaneseNameSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ParseJapaneseNameRequest:
    path_params: ParseJapaneseNamePathParams = field()
    security: ParseJapaneseNameSecurity = field()
    

@dataclass
class ParseJapaneseNameResponse:
    content_type: str = field()
    status_code: int = field()
    personal_name_parsed_out: Optional[shared.PersonalNameParsedOut] = field(default=None)
    
