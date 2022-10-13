from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteManagedServicePathParams:
    service_id: int = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteManagedServiceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteManagedServiceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteManagedServiceSecurity:
    option1: Optional[DeleteManagedServiceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteManagedServiceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteManagedServiceRequest:
    path_params: DeleteManagedServicePathParams = field(default=None)
    security: DeleteManagedServiceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteManagedServiceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteManagedServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_managed_service_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_managed_service_default_application_json_object: Optional[DeleteManagedServiceDefaultApplicationJSON] = field(default=None)
    
