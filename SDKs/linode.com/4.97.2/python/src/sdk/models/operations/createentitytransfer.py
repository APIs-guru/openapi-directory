from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateEntityTransferRequestBody:
    entities: shared.Entities = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    

@dataclass
class CreateEntityTransferSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateEntityTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateEntityTransferRequest:
    security: CreateEntityTransferSecurity = field()
    request: Optional[CreateEntityTransferRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEntityTransferResponse:
    content_type: str = field()
    status_code: int = field()
    entity_transfer: Optional[shared.EntityTransfer] = field(default=None)
    create_entity_transfer_default_application_json_object: Optional[CreateEntityTransferDefaultApplicationJSON] = field(default=None)
    
