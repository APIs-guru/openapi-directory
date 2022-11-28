from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SetUnreadPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetUnreadSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SetUnreadRequest:
    path_params: SetUnreadPathParams = field()
    security: SetUnreadSecurity = field()
    

@dataclass
class SetUnreadResponse:
    content_type: str = field()
    status_code: int = field()
    
