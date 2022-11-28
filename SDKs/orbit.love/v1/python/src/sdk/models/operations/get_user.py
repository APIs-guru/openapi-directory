from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetUserSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUserRequest:
    security: GetUserSecurity = field()
    

@dataclass
class GetUserResponse:
    content_type: str = field()
    status_code: int = field()
    
