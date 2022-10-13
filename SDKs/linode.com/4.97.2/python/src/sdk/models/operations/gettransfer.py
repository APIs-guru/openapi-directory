from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTransferSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTransferSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTransferSecurity:
    option1: Optional[GetTransferSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTransferSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTransferRequest:
    security: GetTransferSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetTransferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    transfer: Optional[shared.Transfer] = field(default=None)
    get_transfer_default_application_json_object: Optional[GetTransferDefaultApplicationJSON] = field(default=None)
    
