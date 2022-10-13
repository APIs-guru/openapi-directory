from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetManagedServicesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetManagedServicesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetManagedServicesSecurity:
    option1: Optional[GetManagedServicesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetManagedServicesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetManagedServicesRequest:
    security: GetManagedServicesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetManagedServices200ApplicationJSON:
    data: Optional[List[shared.ManagedService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetManagedServicesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetManagedServicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_managed_services_200_application_json_object: Optional[GetManagedServices200ApplicationJSON] = field(default=None)
    get_managed_services_default_application_json_object: Optional[GetManagedServicesDefaultApplicationJSON] = field(default=None)
    
