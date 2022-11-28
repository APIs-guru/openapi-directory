from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RestartApplicationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RestartApplicationRequest:
    security: RestartApplicationSecurity = field()
    

@dataclass
class RestartApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    
