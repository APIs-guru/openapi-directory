from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class IpsListQueryParams:
    consuming_account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'consuming_account', 'style': 'form', 'explode': True }})
    external_ref: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'external_ref', 'style': 'form', 'explode': True }})
    fqdn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fqdn', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': False }})
    managing_account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'managing_account', 'style': 'form', 'explode': True }})
    network_feature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'network_feature', 'style': 'form', 'explode': True }})
    network_feature_config: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'network_feature_config', 'style': 'form', 'explode': True }})
    network_service: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'network_service', 'style': 'form', 'explode': True }})
    network_service_config: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'network_service_config', 'style': 'form', 'explode': True }})
    prefix_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'prefix_length', 'style': 'form', 'explode': True }})
    valid_not_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'valid_not_after', 'style': 'form', 'explode': True }})
    valid_not_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'valid_not_before', 'style': 'form', 'explode': True }})
    version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class IpsListRequest:
    query_params: IpsListQueryParams = field(default=None)
    
class IpsList400ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_VALIDATION_ERROR_HTML = "https://errors.ix-api.net/v2/validation-error.html"


@dataclass_json
@dataclass
class IpsList400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: IpsList400ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class IpsList401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class IpsList401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: IpsList401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class IpsList403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class IpsList403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: IpsList403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class IpsListResponse:
    content_type: str = field(default=None)
    ip_addresses: Optional[List[shared.IPAddress]] = field(default=None)
    status_code: int = field(default=None)
    ips_list_400_application_json_object: Optional[IpsList400ApplicationJSON] = field(default=None)
    ips_list_401_application_json_object: Optional[IpsList401ApplicationJSON] = field(default=None)
    ips_list_403_application_json_object: Optional[IpsList403ApplicationJSON] = field(default=None)
    
