from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ConnectionsReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectionsReadRequest:
    path_params: ConnectionsReadPathParams = field(default=None)
    
class ConnectionsRead401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class ConnectionsRead401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: ConnectionsRead401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class ConnectionsRead403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class ConnectionsRead403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: ConnectionsRead403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class ConnectionsRead404ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_NOT_FOUND_HTML = "https://errors.ix-api.net/v2/not-found.html"


@dataclass_json
@dataclass
class ConnectionsRead404ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: ConnectionsRead404ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class ConnectionsReadResponse:
    connection: Optional[shared.Connection] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    connections_read_401_application_json_object: Optional[ConnectionsRead401ApplicationJSON] = field(default=None)
    connections_read_403_application_json_object: Optional[ConnectionsRead403ApplicationJSON] = field(default=None)
    connections_read_404_application_json_object: Optional[ConnectionsRead404ApplicationJSON] = field(default=None)
    
