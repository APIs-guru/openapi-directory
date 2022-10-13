from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CloseTicketPathParams:
    ticket_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ticketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloseTicketSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CloseTicketSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloseTicketSecurity:
    option1: Optional[CloseTicketSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloseTicketSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloseTicketRequest:
    path_params: CloseTicketPathParams = field(default=None)
    security: CloseTicketSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CloseTicketDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CloseTicketResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    close_ticket_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    close_ticket_default_application_json_object: Optional[CloseTicketDefaultApplicationJSON] = field(default=None)
    
