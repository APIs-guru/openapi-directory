from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetTicketPathParams:
    ticket_id: int = field(metadata={'path_param': { 'field_name': 'ticketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTicketSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetTicketDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetTicketRequest:
    path_params: GetTicketPathParams = field()
    security: GetTicketSecurity = field()
    

@dataclass
class GetTicketResponse:
    content_type: str = field()
    status_code: int = field()
    support_ticket: Optional[shared.SupportTicket] = field(default=None)
    get_ticket_default_application_json_object: Optional[GetTicketDefaultApplicationJSON] = field(default=None)
    
