from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutCertificatesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutCertificatesIDRequestBodyUpdateCertificateRequest:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PutCertificatesIDRequest:
    path_params: PutCertificatesIDPathParams = field(default=None)
    request: Optional[PutCertificatesIDRequestBodyUpdateCertificateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutCertificatesID200ApplicationJSONCertificateStatusError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
class PutCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

class PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnum(str, Enum):
    SCHEDULED = "scheduled"
    PENDING = "pending"
    FAILED = "failed"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class PutCertificatesID200ApplicationJSONCertificateStatus:
    error: Optional[PutCertificatesID200ApplicationJSONCertificateStatusError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    issuance: Optional[PutCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuance' }})
    renewal: Optional[PutCertificatesID200ApplicationJSONCertificateStatusRenewalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewal' }})
    
class PutCertificatesID200ApplicationJSONCertificateTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class PutCertificatesID200ApplicationJSONCertificateUsedBy:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PutCertificatesID200ApplicationJSONCertificateCertificate:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    domain_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_names' }})
    fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    not_valid_after: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not_valid_after' }})
    not_valid_before: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not_valid_before' }})
    status: Optional[PutCertificatesID200ApplicationJSONCertificateStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[PutCertificatesID200ApplicationJSONCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    used_by: List[PutCertificatesID200ApplicationJSONCertificateUsedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used_by' }})
    

@dataclass_json
@dataclass
class PutCertificatesID200ApplicationJSONCertificateResponse:
    certificate: PutCertificatesID200ApplicationJSONCertificateCertificate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    

@dataclass
class PutCertificatesIDResponse:
    certificate_response: Optional[PutCertificatesID200ApplicationJSONCertificateResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
