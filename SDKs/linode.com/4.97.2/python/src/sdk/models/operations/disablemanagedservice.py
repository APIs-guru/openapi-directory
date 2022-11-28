from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DisableManagedServicePathParams:
    service_id: int = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableManagedServiceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DisableManagedServiceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DisableManagedServiceRequest:
    path_params: DisableManagedServicePathParams = field()
    security: DisableManagedServiceSecurity = field()
    

@dataclass
class DisableManagedServiceResponse:
    content_type: str = field()
    status_code: int = field()
    managed_service: Optional[shared.ManagedService] = field(default=None)
    disable_managed_service_default_application_json_object: Optional[DisableManagedServiceDefaultApplicationJSON] = field(default=None)
    
