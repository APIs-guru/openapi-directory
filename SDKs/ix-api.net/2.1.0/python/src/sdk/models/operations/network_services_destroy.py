from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class NetworkServicesDestroyPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NetworkServicesDestroyRequest:
    path_params: NetworkServicesDestroyPathParams = field(default=None)
    request: Optional[shared.CancellationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class NetworkServicesDestroy400ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_CANCELLATION_POLICY_ERROR_HTML = "https://errors.ix-api.net/v2/cancellation-policy-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_UNABLE_TO_FULFILL_HTML = "https://errors.ix-api.net/v2/unable-to-fulfill.html"


@dataclass_json
@dataclass
class NetworkServicesDestroy400ApplicationJSON:
    charged_until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charged_until', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    decommission_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decommission_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServicesDestroy400ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkServicesDestroy401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class NetworkServicesDestroy401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServicesDestroy401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkServicesDestroy403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class NetworkServicesDestroy403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServicesDestroy403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkServicesDestroy404ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_NOT_FOUND_HTML = "https://errors.ix-api.net/v2/not-found.html"


@dataclass_json
@dataclass
class NetworkServicesDestroy404ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServicesDestroy404ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NetworkServicesDestroyResponse:
    content_type: str = field(default=None)
    network_service: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    network_services_destroy_400_application_json_object: Optional[NetworkServicesDestroy400ApplicationJSON] = field(default=None)
    network_services_destroy_401_application_json_object: Optional[NetworkServicesDestroy401ApplicationJSON] = field(default=None)
    network_services_destroy_403_application_json_object: Optional[NetworkServicesDestroy403ApplicationJSON] = field(default=None)
    network_services_destroy_404_application_json_object: Optional[NetworkServicesDestroy404ApplicationJSON] = field(default=None)
    
