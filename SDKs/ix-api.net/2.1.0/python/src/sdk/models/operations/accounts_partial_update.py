from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AccountsPartialUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountsPartialUpdateRequest:
    path_params: AccountsPartialUpdatePathParams = field(default=None)
    request: Optional[shared.AccountUpdatePartial] = field(default=None, metadata={'request': { 'media_type': 'application/merge-patch+json' }})
    
class AccountsPartialUpdate400ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_VALIDATION_ERROR_HTML = "https://errors.ix-api.net/v2/validation-error.html"


@dataclass_json
@dataclass
class AccountsPartialUpdate400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: AccountsPartialUpdate400ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class AccountsPartialUpdate401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class AccountsPartialUpdate401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: AccountsPartialUpdate401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class AccountsPartialUpdate403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class AccountsPartialUpdate403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: AccountsPartialUpdate403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class AccountsPartialUpdate404ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_NOT_FOUND_HTML = "https://errors.ix-api.net/v2/not-found.html"


@dataclass_json
@dataclass
class AccountsPartialUpdate404ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: AccountsPartialUpdate404ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class AccountsPartialUpdateResponse:
    account: Optional[shared.Account] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    accounts_partial_update_400_application_json_object: Optional[AccountsPartialUpdate400ApplicationJSON] = field(default=None)
    accounts_partial_update_401_application_json_object: Optional[AccountsPartialUpdate401ApplicationJSON] = field(default=None)
    accounts_partial_update_403_application_json_object: Optional[AccountsPartialUpdate403ApplicationJSON] = field(default=None)
    accounts_partial_update_404_application_json_object: Optional[AccountsPartialUpdate404ApplicationJSON] = field(default=None)
    
