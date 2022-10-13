from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLongviewClientsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLongviewClientsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLongviewClientsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLongviewClientsSecurity:
    option1: Optional[GetLongviewClientsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLongviewClientsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLongviewClientsRequest:
    query_params: GetLongviewClientsQueryParams = field(default=None)
    security: GetLongviewClientsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLongviewClients200ApplicationJSON:
    data: Optional[List[shared.LongviewClient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetLongviewClientsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLongviewClientsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_longview_clients_200_application_json_object: Optional[GetLongviewClients200ApplicationJSON] = field(default=None)
    get_longview_clients_default_application_json_object: Optional[GetLongviewClientsDefaultApplicationJSON] = field(default=None)
    
