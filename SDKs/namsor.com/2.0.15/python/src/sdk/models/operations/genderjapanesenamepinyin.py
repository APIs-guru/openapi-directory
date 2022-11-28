from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderJapaneseNamePinyinPathParams:
    japanese_given_name: str = field(metadata={'path_param': { 'field_name': 'japaneseGivenName', 'style': 'simple', 'explode': False }})
    japanese_surname: str = field(metadata={'path_param': { 'field_name': 'japaneseSurname', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenderJapaneseNamePinyinSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderJapaneseNamePinyinRequest:
    path_params: GenderJapaneseNamePinyinPathParams = field()
    security: GenderJapaneseNamePinyinSecurity = field()
    

@dataclass
class GenderJapaneseNamePinyinResponse:
    content_type: str = field()
    status_code: int = field()
    first_last_name_gendered_out: Optional[shared.FirstLastNameGenderedOut] = field(default=None)
    
