from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderJapaneseNameFullPathParams:
    japanese_name: str = field(default=None, metadata={'path_param': { 'field_name': 'japaneseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenderJapaneseNameFullSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderJapaneseNameFullRequest:
    path_params: GenderJapaneseNameFullPathParams = field(default=None)
    security: GenderJapaneseNameFullSecurity = field(default=None)
    

@dataclass
class GenderJapaneseNameFullResponse:
    content_type: str = field(default=None)
    personal_name_gendered_out: Optional[shared.PersonalNameGenderedOut] = field(default=None)
    status_code: int = field(default=None)
    
