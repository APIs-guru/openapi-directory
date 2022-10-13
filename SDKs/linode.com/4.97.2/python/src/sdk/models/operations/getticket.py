from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTicketPathParams:
    ticket_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ticketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTicketSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTicketSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTicketSecurity:
    option1: Optional[GetTicketSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTicketSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTicketRequest:
    path_params: GetTicketPathParams = field(default=None)
    security: GetTicketSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetTicketDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetTicketResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    support_ticket: Optional[shared.SupportTicket] = field(default=None)
    get_ticket_default_application_json_object: Optional[GetTicketDefaultApplicationJSON] = field(default=None)
    
