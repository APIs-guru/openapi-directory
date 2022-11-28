from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CloseTicketPathParams:
    ticket_id: int = field(metadata={'path_param': { 'field_name': 'ticketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloseTicketSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CloseTicketDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CloseTicketRequest:
    path_params: CloseTicketPathParams = field()
    security: CloseTicketSecurity = field()
    

@dataclass
class CloseTicketResponse:
    content_type: str = field()
    status_code: int = field()
    close_ticket_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    close_ticket_default_application_json_object: Optional[CloseTicketDefaultApplicationJSON] = field(default=None)
    
