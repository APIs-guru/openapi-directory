from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderFullPathParams:
    full_name: str = field(default=None, metadata={'path_param': { 'field_name': 'fullName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenderFullSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderFullRequest:
    path_params: GenderFullPathParams = field(default=None)
    security: GenderFullSecurity = field(default=None)
    

@dataclass
class GenderFullResponse:
    content_type: str = field(default=None)
    personal_name_gendered_out: Optional[shared.PersonalNameGenderedOut] = field(default=None)
    status_code: int = field(default=None)
    
