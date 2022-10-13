from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetClientsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetClientsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetClientsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetClientsSecurity:
    option1: Optional[GetClientsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetClientsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetClientsRequest:
    query_params: GetClientsQueryParams = field(default=None)
    security: GetClientsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetClients200ApplicationJSON:
    data: Optional[List[shared.OAuthClient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetClientsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetClientsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_clients_200_application_json_object: Optional[GetClients200ApplicationJSON] = field(default=None)
    get_clients_default_application_json_object: Optional[GetClientsDefaultApplicationJSON] = field(default=None)
    
