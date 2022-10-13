from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTicketRepliesPathParams:
    ticket_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ticketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTicketRepliesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTicketRepliesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTicketRepliesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTicketRepliesSecurity:
    option1: Optional[GetTicketRepliesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTicketRepliesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTicketRepliesRequest:
    path_params: GetTicketRepliesPathParams = field(default=None)
    query_params: GetTicketRepliesQueryParams = field(default=None)
    security: GetTicketRepliesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetTicketReplies200ApplicationJSON:
    data: Optional[List[shared.SupportTicketReply]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetTicketRepliesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetTicketRepliesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_ticket_replies_200_application_json_object: Optional[GetTicketReplies200ApplicationJSON] = field(default=None)
    get_ticket_replies_default_application_json_object: Optional[GetTicketRepliesDefaultApplicationJSON] = field(default=None)
    
