from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderChineseNamePathParams:
    chinese_name: str = field(metadata={'path_param': { 'field_name': 'chineseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenderChineseNameSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderChineseNameRequest:
    path_params: GenderChineseNamePathParams = field()
    security: GenderChineseNameSecurity = field()
    

@dataclass
class GenderChineseNameResponse:
    content_type: str = field()
    status_code: int = field()
    personal_name_gendered_out: Optional[shared.PersonalNameGenderedOut] = field(default=None)
    
