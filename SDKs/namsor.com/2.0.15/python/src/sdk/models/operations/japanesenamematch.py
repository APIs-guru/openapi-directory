from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameMatchPathParams:
    japanese_given_name_latin: str = field(metadata={'path_param': { 'field_name': 'japaneseGivenNameLatin', 'style': 'simple', 'explode': False }})
    japanese_name: str = field(metadata={'path_param': { 'field_name': 'japaneseName', 'style': 'simple', 'explode': False }})
    japanese_surname_latin: str = field(metadata={'path_param': { 'field_name': 'japaneseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclass
class JapaneseNameMatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameMatchRequest:
    path_params: JapaneseNameMatchPathParams = field()
    security: JapaneseNameMatchSecurity = field()
    

@dataclass
class JapaneseNameMatchResponse:
    content_type: str = field()
    status_code: int = field()
    name_matched_out: Optional[shared.NameMatchedOut] = field(default=None)
    
