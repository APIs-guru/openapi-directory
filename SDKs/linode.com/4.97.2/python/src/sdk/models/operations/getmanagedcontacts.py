from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetManagedContactsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetManagedContactsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetManagedContactsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetManagedContactsSecurity:
    option1: Optional[GetManagedContactsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetManagedContactsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetManagedContactsRequest:
    query_params: GetManagedContactsQueryParams = field(default=None)
    security: GetManagedContactsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetManagedContacts200ApplicationJSON:
    data: Optional[List[shared.ManagedContact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetManagedContactsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetManagedContactsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_managed_contacts_200_application_json_object: Optional[GetManagedContacts200ApplicationJSON] = field(default=None)
    get_managed_contacts_default_application_json_object: Optional[GetManagedContactsDefaultApplicationJSON] = field(default=None)
    
