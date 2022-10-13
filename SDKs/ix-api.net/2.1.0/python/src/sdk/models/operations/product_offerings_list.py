from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ProductOfferingsListDeliveryMethodEnum(str, Enum):
    DEDICATED = "dedicated"
    SHARED = "shared"

class ProductOfferingsListDowngradeAllowedEnum(str, Enum):
    TRUE = "true"

class ProductOfferingsListTypeEnum(str, Enum):
    EXCHANGE_LAN = "exchange_lan"
    P2P_VC = "p2p_vc"
    MP2MP_VC = "mp2mp_vc"
    P2MP_VC = "p2mp_vc"
    CLOUD_VC = "cloud_vc"

class ProductOfferingsListUpgradeAllowedEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"


@dataclass
class ProductOfferingsListQueryParams:
    bandwidth: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'bandwidth', 'style': 'form', 'explode': True }})
    cloud_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cloud_key', 'style': 'form', 'explode': True }})
    delivery_method: Optional[ProductOfferingsListDeliveryMethodEnum] = field(default=None, metadata={'query_param': { 'field_name': 'delivery_method', 'style': 'form', 'explode': True }})
    downgrade_allowed: Optional[ProductOfferingsListDowngradeAllowedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'downgrade_allowed', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    handover_metro_area: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'handover_metro_area', 'style': 'form', 'explode': True }})
    handover_metro_area_network: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'handover_metro_area_network', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': False }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    physical_port_speed: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'physical_port_speed', 'style': 'form', 'explode': True }})
    service_metro_area: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service_metro_area', 'style': 'form', 'explode': True }})
    service_metro_area_network: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service_metro_area_network', 'style': 'form', 'explode': True }})
    service_provider: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service_provider', 'style': 'form', 'explode': True }})
    service_provider_pop: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service_provider_pop', 'style': 'form', 'explode': True }})
    service_provider_region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service_provider_region', 'style': 'form', 'explode': True }})
    type: Optional[ProductOfferingsListTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    upgrade_allowed: Optional[ProductOfferingsListUpgradeAllowedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'upgrade_allowed', 'style': 'form', 'explode': True }})
    

@dataclass
class ProductOfferingsListRequest:
    query_params: ProductOfferingsListQueryParams = field(default=None)
    
class ProductOfferingsList400ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_VALIDATION_ERROR_HTML = "https://errors.ix-api.net/v2/validation-error.html"


@dataclass_json
@dataclass
class ProductOfferingsList400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: ProductOfferingsList400ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class ProductOfferingsList401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class ProductOfferingsList401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: ProductOfferingsList401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class ProductOfferingsList403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class ProductOfferingsList403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: ProductOfferingsList403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class ProductOfferingsListResponse:
    content_type: str = field(default=None)
    product_offering_partials: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    product_offerings_list_400_application_json_object: Optional[ProductOfferingsList400ApplicationJSON] = field(default=None)
    product_offerings_list_401_application_json_object: Optional[ProductOfferingsList401ApplicationJSON] = field(default=None)
    product_offerings_list_403_application_json_object: Optional[ProductOfferingsList403ApplicationJSON] = field(default=None)
    
