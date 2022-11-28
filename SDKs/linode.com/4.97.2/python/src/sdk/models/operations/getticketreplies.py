from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetTicketRepliesPathParams:
    ticket_id: int = field(metadata={'path_param': { 'field_name': 'ticketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTicketRepliesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTicketRepliesSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetTicketReplies200ApplicationJSON:
    data: Optional[List[shared.SupportTicketReply]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetTicketRepliesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetTicketRepliesRequest:
    path_params: GetTicketRepliesPathParams = field()
    query_params: GetTicketRepliesQueryParams = field()
    security: GetTicketRepliesSecurity = field()
    

@dataclass
class GetTicketRepliesResponse:
    content_type: str = field()
    status_code: int = field()
    get_ticket_replies_200_application_json_object: Optional[GetTicketReplies200ApplicationJSON] = field(default=None)
    get_ticket_replies_default_application_json_object: Optional[GetTicketRepliesDefaultApplicationJSON] = field(default=None)
    
