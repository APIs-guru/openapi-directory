from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GenderPathParams:
    first_name: str = field(default=None, metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = field(default=None, metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenderSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GenderRequest:
    path_params: GenderPathParams = field(default=None)
    security: GenderSecurity = field(default=None)
    

@dataclass
class GenderResponse:
    content_type: str = field(default=None)
    first_last_name_gendered_out: Optional[shared.FirstLastNameGenderedOut] = field(default=None)
    status_code: int = field(default=None)
    
