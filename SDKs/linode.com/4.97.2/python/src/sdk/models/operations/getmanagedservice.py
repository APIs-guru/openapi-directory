from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetManagedServicePathParams:
    service_id: int = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetManagedServiceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetManagedServiceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetManagedServiceSecurity:
    option1: Optional[GetManagedServiceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetManagedServiceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetManagedServiceRequest:
    path_params: GetManagedServicePathParams = field(default=None)
    security: GetManagedServiceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetManagedServiceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetManagedServiceResponse:
    content_type: str = field(default=None)
    managed_service: Optional[shared.ManagedService] = field(default=None)
    status_code: int = field(default=None)
    get_managed_service_default_application_json_object: Optional[GetManagedServiceDefaultApplicationJSON] = field(default=None)
    
