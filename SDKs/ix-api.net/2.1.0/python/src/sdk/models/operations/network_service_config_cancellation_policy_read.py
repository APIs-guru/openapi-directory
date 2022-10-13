from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class NetworkServiceConfigCancellationPolicyReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NetworkServiceConfigCancellationPolicyReadQueryParams:
    decommission_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'decommission_at', 'style': 'form', 'explode': True }})
    

@dataclass
class NetworkServiceConfigCancellationPolicyReadRequest:
    path_params: NetworkServiceConfigCancellationPolicyReadPathParams = field(default=None)
    query_params: NetworkServiceConfigCancellationPolicyReadQueryParams = field(default=None)
    
class NetworkServiceConfigCancellationPolicyRead401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class NetworkServiceConfigCancellationPolicyRead401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServiceConfigCancellationPolicyRead401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkServiceConfigCancellationPolicyRead403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class NetworkServiceConfigCancellationPolicyRead403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServiceConfigCancellationPolicyRead403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkServiceConfigCancellationPolicyRead404ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_NOT_FOUND_HTML = "https://errors.ix-api.net/v2/not-found.html"


@dataclass_json
@dataclass
class NetworkServiceConfigCancellationPolicyRead404ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServiceConfigCancellationPolicyRead404ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NetworkServiceConfigCancellationPolicyReadResponse:
    cancellation_policy: Optional[shared.CancellationPolicy] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    network_service_config_cancellation_policy_read_401_application_json_object: Optional[NetworkServiceConfigCancellationPolicyRead401ApplicationJSON] = field(default=None)
    network_service_config_cancellation_policy_read_403_application_json_object: Optional[NetworkServiceConfigCancellationPolicyRead403ApplicationJSON] = field(default=None)
    network_service_config_cancellation_policy_read_404_application_json_object: Optional[NetworkServiceConfigCancellationPolicyRead404ApplicationJSON] = field(default=None)
    
