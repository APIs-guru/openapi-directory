from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateServiceTransferRequestBody:
    entities: shared.Entities = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    

@dataclass
class CreateServiceTransferSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateServiceTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateServiceTransferRequest:
    security: CreateServiceTransferSecurity = field()
    request: Optional[CreateServiceTransferRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateServiceTransferResponse:
    content_type: str = field()
    status_code: int = field()
    service_transfer: Optional[shared.ServiceTransfer] = field(default=None)
    create_service_transfer_default_application_json_object: Optional[CreateServiceTransferDefaultApplicationJSON] = field(default=None)
    
