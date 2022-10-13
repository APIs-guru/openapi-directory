from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTicketsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTicketsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTicketsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTicketsSecurity:
    option1: Optional[GetTicketsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTicketsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTicketsRequest:
    query_params: GetTicketsQueryParams = field(default=None)
    security: GetTicketsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetTickets200ApplicationJSON:
    data: Optional[List[shared.SupportTicket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetTicketsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetTicketsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_tickets_200_application_json_object: Optional[GetTickets200ApplicationJSON] = field(default=None)
    get_tickets_default_application_json_object: Optional[GetTicketsDefaultApplicationJSON] = field(default=None)
    
