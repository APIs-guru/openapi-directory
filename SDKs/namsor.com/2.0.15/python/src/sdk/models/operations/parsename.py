from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ParseNamePathParams:
    name_full: str = field(metadata={'path_param': { 'field_name': 'nameFull', 'style': 'simple', 'explode': False }})
    

@dataclass
class ParseNameSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ParseNameRequest:
    path_params: ParseNamePathParams = field()
    security: ParseNameSecurity = field()
    

@dataclass
class ParseNameResponse:
    content_type: str = field()
    status_code: int = field()
    personal_name_parsed_out: Optional[shared.PersonalNameParsedOut] = field(default=None)
    
