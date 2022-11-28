from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderPathParams:
    first_name: str = field(metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = field(metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenderSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderRequest:
    path_params: GenderPathParams = field()
    security: GenderSecurity = field()
    

@dataclass
class GenderResponse:
    content_type: str = field()
    status_code: int = field()
    first_last_name_gendered_out: Optional[shared.FirstLastNameGenderedOut] = field(default=None)
    
