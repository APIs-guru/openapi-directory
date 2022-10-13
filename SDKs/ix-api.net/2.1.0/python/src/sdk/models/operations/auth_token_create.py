from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AuthTokenCreateRequest:
    request: Optional[shared.AuthTokenRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class AuthTokenCreate400ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_VALIDATION_ERROR_HTML = "https://errors.ix-api.net/v2/validation-error.html"


@dataclass_json
@dataclass
class AuthTokenCreate400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: AuthTokenCreate400ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class AuthTokenCreate401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"
    HTTPS_ERRORS_IX_API_NET_V2_NOT_AUTHENTICATED_HTML = "https://errors.ix-api.net/v2/not-authenticated.html"


@dataclass_json
@dataclass
class AuthTokenCreate401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: AuthTokenCreate401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class AuthTokenCreateResponse:
    auth_token: Optional[shared.AuthToken] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    auth_token_create_400_application_json_object: Optional[AuthTokenCreate400ApplicationJSON] = field(default=None)
    auth_token_create_401_application_json_object: Optional[AuthTokenCreate401ApplicationJSON] = field(default=None)
    
