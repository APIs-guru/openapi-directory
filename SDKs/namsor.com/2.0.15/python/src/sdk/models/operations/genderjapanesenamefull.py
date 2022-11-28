from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderJapaneseNameFullPathParams:
    japanese_name: str = field(metadata={'path_param': { 'field_name': 'japaneseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenderJapaneseNameFullSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderJapaneseNameFullRequest:
    path_params: GenderJapaneseNameFullPathParams = field()
    security: GenderJapaneseNameFullSecurity = field()
    

@dataclass
class GenderJapaneseNameFullResponse:
    content_type: str = field()
    status_code: int = field()
    personal_name_gendered_out: Optional[shared.PersonalNameGenderedOut] = field(default=None)
    
