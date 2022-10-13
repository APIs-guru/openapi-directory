from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ParseNamePathParams:
    name_full: str = field(default=None, metadata={'path_param': { 'field_name': 'nameFull', 'style': 'simple', 'explode': False }})
    

@dataclass
class ParseNameSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ParseNameRequest:
    path_params: ParseNamePathParams = field(default=None)
    security: ParseNameSecurity = field(default=None)
    

@dataclass
class ParseNameResponse:
    content_type: str = field(default=None)
    personal_name_parsed_out: Optional[shared.PersonalNameParsedOut] = field(default=None)
    status_code: int = field(default=None)
    
