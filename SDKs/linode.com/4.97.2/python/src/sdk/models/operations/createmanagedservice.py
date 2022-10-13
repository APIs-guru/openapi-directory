from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreateManagedServiceRequestBodyServiceTypeEnum(str, Enum):
    URL = "url"
    TCP = "tcp"

class CreateManagedServiceRequestBodyStatusEnum(str, Enum):
    DISABLED = "disabled"
    PENDING = "pending"
    OK = "ok"
    PROBLEM = "problem"


@dataclass_json
@dataclass
class CreateManagedServiceRequestBody:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    consultation_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consultation_group' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credentials: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    service_type: CreateManagedServiceRequestBodyServiceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_type' }})
    status: Optional[CreateManagedServiceRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass
class CreateManagedServiceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateManagedServiceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateManagedServiceSecurity:
    option1: Optional[CreateManagedServiceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateManagedServiceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateManagedServiceRequest:
    request: Optional[CreateManagedServiceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateManagedServiceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateManagedServiceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateManagedServiceResponse:
    content_type: str = field(default=None)
    managed_service: Optional[shared.ManagedService] = field(default=None)
    status_code: int = field(default=None)
    create_managed_service_default_application_json_object: Optional[CreateManagedServiceDefaultApplicationJSON] = field(default=None)
    
