from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateEntityTransferRequestBody:
    entities: shared.Entities = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    

@dataclass
class CreateEntityTransferSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateEntityTransferSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateEntityTransferSecurity:
    option1: Optional[CreateEntityTransferSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateEntityTransferSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateEntityTransferRequest:
    request: Optional[CreateEntityTransferRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateEntityTransferSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateEntityTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateEntityTransferResponse:
    content_type: str = field(default=None)
    entity_transfer: Optional[shared.EntityTransfer] = field(default=None)
    status_code: int = field(default=None)
    create_entity_transfer_default_application_json_object: Optional[CreateEntityTransferDefaultApplicationJSON] = field(default=None)
    
