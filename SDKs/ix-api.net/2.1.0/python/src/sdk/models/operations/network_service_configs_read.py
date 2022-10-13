from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class NetworkServiceConfigsReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NetworkServiceConfigsReadRequest:
    path_params: NetworkServiceConfigsReadPathParams = field(default=None)
    
class NetworkServiceConfigsRead401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class NetworkServiceConfigsRead401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServiceConfigsRead401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkServiceConfigsRead403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class NetworkServiceConfigsRead403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServiceConfigsRead403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkServiceConfigsRead404ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_NOT_FOUND_HTML = "https://errors.ix-api.net/v2/not-found.html"


@dataclass_json
@dataclass
class NetworkServiceConfigsRead404ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServiceConfigsRead404ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NetworkServiceConfigsReadResponse:
    content_type: str = field(default=None)
    network_service_config: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    network_service_configs_read_401_application_json_object: Optional[NetworkServiceConfigsRead401ApplicationJSON] = field(default=None)
    network_service_configs_read_403_application_json_object: Optional[NetworkServiceConfigsRead403ApplicationJSON] = field(default=None)
    network_service_configs_read_404_application_json_object: Optional[NetworkServiceConfigsRead404ApplicationJSON] = field(default=None)
    
