from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetServiceTransferPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServiceTransferSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetServiceTransferSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetServiceTransferSecurity:
    option1: Optional[GetServiceTransferSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetServiceTransferSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetServiceTransferRequest:
    path_params: GetServiceTransferPathParams = field(default=None)
    security: GetServiceTransferSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetServiceTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetServiceTransferResponse:
    content_type: str = field(default=None)
    service_transfer: Optional[shared.ServiceTransfer] = field(default=None)
    status_code: int = field(default=None)
    get_service_transfer_default_application_json_object: Optional[GetServiceTransferDefaultApplicationJSON] = field(default=None)
    
