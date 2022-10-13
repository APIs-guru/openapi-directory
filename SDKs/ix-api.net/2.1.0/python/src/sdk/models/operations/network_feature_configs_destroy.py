from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class NetworkFeatureConfigsDestroyPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NetworkFeatureConfigsDestroyRequest:
    path_params: NetworkFeatureConfigsDestroyPathParams = field(default=None)
    
class NetworkFeatureConfigsDestroy400ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_UNABLE_TO_FULFILL_HTML = "https://errors.ix-api.net/v2/unable-to-fulfill.html"


@dataclass_json
@dataclass
class NetworkFeatureConfigsDestroy400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkFeatureConfigsDestroy400ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkFeatureConfigsDestroy401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class NetworkFeatureConfigsDestroy401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkFeatureConfigsDestroy401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkFeatureConfigsDestroy403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class NetworkFeatureConfigsDestroy403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkFeatureConfigsDestroy403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkFeatureConfigsDestroy404ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_NOT_FOUND_HTML = "https://errors.ix-api.net/v2/not-found.html"


@dataclass_json
@dataclass
class NetworkFeatureConfigsDestroy404ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkFeatureConfigsDestroy404ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NetworkFeatureConfigsDestroyResponse:
    content_type: str = field(default=None)
    network_feature_config: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    network_feature_configs_destroy_400_application_json_object: Optional[NetworkFeatureConfigsDestroy400ApplicationJSON] = field(default=None)
    network_feature_configs_destroy_401_application_json_object: Optional[NetworkFeatureConfigsDestroy401ApplicationJSON] = field(default=None)
    network_feature_configs_destroy_403_application_json_object: Optional[NetworkFeatureConfigsDestroy403ApplicationJSON] = field(default=None)
    network_feature_configs_destroy_404_application_json_object: Optional[NetworkFeatureConfigsDestroy404ApplicationJSON] = field(default=None)
    
