from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetCertificatesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCertificatesIDRequest:
    path_params: GetCertificatesIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetCertificatesID200ApplicationJSONCertificateStatusError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
class GetCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

class GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnum(str, Enum):
    SCHEDULED = "scheduled"
    PENDING = "pending"
    FAILED = "failed"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class GetCertificatesID200ApplicationJSONCertificateStatus:
    error: Optional[GetCertificatesID200ApplicationJSONCertificateStatusError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    issuance: Optional[GetCertificatesID200ApplicationJSONCertificateStatusIssuanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuance' }})
    renewal: Optional[GetCertificatesID200ApplicationJSONCertificateStatusRenewalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewal' }})
    
class GetCertificatesID200ApplicationJSONCertificateTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class GetCertificatesID200ApplicationJSONCertificateUsedBy:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetCertificatesID200ApplicationJSONCertificateCertificate:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    domain_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_names' }})
    fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    not_valid_after: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not_valid_after' }})
    not_valid_before: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not_valid_before' }})
    status: Optional[GetCertificatesID200ApplicationJSONCertificateStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[GetCertificatesID200ApplicationJSONCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    used_by: List[GetCertificatesID200ApplicationJSONCertificateUsedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used_by' }})
    

@dataclass_json
@dataclass
class GetCertificatesID200ApplicationJSONCertificateResponse:
    certificate: GetCertificatesID200ApplicationJSONCertificateCertificate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    

@dataclass
class GetCertificatesIDResponse:
    certificate_response: Optional[GetCertificatesID200ApplicationJSONCertificateResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
