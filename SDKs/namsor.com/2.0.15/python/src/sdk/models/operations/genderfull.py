from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderFullPathParams:
    full_name: str = field(metadata={'path_param': { 'field_name': 'fullName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenderFullSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderFullRequest:
    path_params: GenderFullPathParams = field()
    security: GenderFullSecurity = field()
    

@dataclass
class GenderFullResponse:
    content_type: str = field()
    status_code: int = field()
    personal_name_gendered_out: Optional[shared.PersonalNameGenderedOut] = field(default=None)
    
