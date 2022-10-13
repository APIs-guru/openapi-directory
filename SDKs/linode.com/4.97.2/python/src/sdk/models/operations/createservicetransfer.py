from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateServiceTransferRequestBody:
    entities: shared.Entities = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    

@dataclass
class CreateServiceTransferSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateServiceTransferSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateServiceTransferSecurity:
    option1: Optional[CreateServiceTransferSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateServiceTransferSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateServiceTransferRequest:
    request: Optional[CreateServiceTransferRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateServiceTransferSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateServiceTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateServiceTransferResponse:
    content_type: str = field(default=None)
    service_transfer: Optional[shared.ServiceTransfer] = field(default=None)
    status_code: int = field(default=None)
    create_service_transfer_default_application_json_object: Optional[CreateServiceTransferDefaultApplicationJSON] = field(default=None)
    
