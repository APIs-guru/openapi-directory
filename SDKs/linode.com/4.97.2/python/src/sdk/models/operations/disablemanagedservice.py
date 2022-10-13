from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DisableManagedServicePathParams:
    service_id: int = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableManagedServiceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DisableManagedServiceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DisableManagedServiceSecurity:
    option1: Optional[DisableManagedServiceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DisableManagedServiceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DisableManagedServiceRequest:
    path_params: DisableManagedServicePathParams = field(default=None)
    security: DisableManagedServiceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DisableManagedServiceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DisableManagedServiceResponse:
    content_type: str = field(default=None)
    managed_service: Optional[shared.ManagedService] = field(default=None)
    status_code: int = field(default=None)
    disable_managed_service_default_application_json_object: Optional[DisableManagedServiceDefaultApplicationJSON] = field(default=None)
    
