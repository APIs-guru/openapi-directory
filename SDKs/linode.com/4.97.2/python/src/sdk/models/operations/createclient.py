from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreateClientRequestBodyStatusEnum(str, Enum):
    ACTIVE = "active"
    DISABLED = "disabled"
    SUSPENDED = "suspended"


@dataclass_json
@dataclass
class CreateClientRequestBody:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    redirect_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_uri' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    status: Optional[CreateClientRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail_url' }})
    

@dataclass
class CreateClientSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateClientSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateClientSecurity:
    option1: Optional[CreateClientSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateClientSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateClientRequest:
    request: Optional[CreateClientRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateClientSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateClientResponse:
    content_type: str = field(default=None)
    o_auth_client: Optional[shared.OAuthClient] = field(default=None)
    status_code: int = field(default=None)
    create_client_default_application_json_object: Optional[CreateClientDefaultApplicationJSON] = field(default=None)
    
