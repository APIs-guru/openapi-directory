from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateManagedServicePathParams:
    service_id: int = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateManagedServiceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateManagedServiceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateManagedServiceSecurity:
    option1: Optional[UpdateManagedServiceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateManagedServiceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateManagedServiceRequest:
    path_params: UpdateManagedServicePathParams = field(default=None)
    request: shared.ManagedService = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateManagedServiceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateManagedServiceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateManagedServiceResponse:
    content_type: str = field(default=None)
    managed_service: Optional[shared.ManagedService] = field(default=None)
    status_code: int = field(default=None)
    update_managed_service_default_application_json_object: Optional[UpdateManagedServiceDefaultApplicationJSON] = field(default=None)
    
