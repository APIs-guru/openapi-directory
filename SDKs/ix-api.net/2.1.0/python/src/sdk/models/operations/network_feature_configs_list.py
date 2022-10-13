from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class NetworkFeatureConfigsListTypeEnum(str, Enum):
    ROUTE_SERVER = "route_server"


@dataclass
class NetworkFeatureConfigsListQueryParams:
    consuming_account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'consuming_account', 'style': 'form', 'explode': True }})
    external_ref: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'external_ref', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': False }})
    managing_account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'managing_account', 'style': 'form', 'explode': True }})
    network_feature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'network_feature', 'style': 'form', 'explode': True }})
    service_config: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service_config', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    state_is_not: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state__is_not', 'style': 'form', 'explode': True }})
    type: Optional[NetworkFeatureConfigsListTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class NetworkFeatureConfigsListRequest:
    query_params: NetworkFeatureConfigsListQueryParams = field(default=None)
    
class NetworkFeatureConfigsList400ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_VALIDATION_ERROR_HTML = "https://errors.ix-api.net/v2/validation-error.html"


@dataclass_json
@dataclass
class NetworkFeatureConfigsList400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkFeatureConfigsList400ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkFeatureConfigsList401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class NetworkFeatureConfigsList401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkFeatureConfigsList401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkFeatureConfigsList403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class NetworkFeatureConfigsList403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkFeatureConfigsList403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NetworkFeatureConfigsListResponse:
    content_type: str = field(default=None)
    network_feature_configs: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    network_feature_configs_list_400_application_json_object: Optional[NetworkFeatureConfigsList400ApplicationJSON] = field(default=None)
    network_feature_configs_list_401_application_json_object: Optional[NetworkFeatureConfigsList401ApplicationJSON] = field(default=None)
    network_feature_configs_list_403_application_json_object: Optional[NetworkFeatureConfigsList403ApplicationJSON] = field(default=None)
    
