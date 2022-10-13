from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetEventsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetEventsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEventsSecurity:
    option1: Optional[GetEventsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetEventsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetEventsRequest:
    query_params: GetEventsQueryParams = field(default=None)
    security: GetEventsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetEvents200ApplicationJSON:
    data: Optional[List[shared.Event]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetEventsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetEventsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_events_200_application_json_object: Optional[GetEvents200ApplicationJSON] = field(default=None)
    get_events_default_application_json_object: Optional[GetEventsDefaultApplicationJSON] = field(default=None)
    
