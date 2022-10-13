from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AcceptServiceTransferPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class AcceptServiceTransferSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AcceptServiceTransferSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AcceptServiceTransferSecurity:
    option1: Optional[AcceptServiceTransferSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AcceptServiceTransferSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AcceptServiceTransferRequest:
    path_params: AcceptServiceTransferPathParams = field(default=None)
    security: AcceptServiceTransferSecurity = field(default=None)
    

@dataclass_json
@dataclass
class AcceptServiceTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class AcceptServiceTransferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    accept_service_transfer_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    accept_service_transfer_default_application_json_object: Optional[AcceptServiceTransferDefaultApplicationJSON] = field(default=None)
    
