from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class PostCertificatesRequestBodyTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class PostCertificatesRequestBodyCreateCertificateRequest:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    domain_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_names' }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_key' }})
    type: Optional[PostCertificatesRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostCertificatesRequest:
    request: Optional[PostCertificatesRequestBodyCreateCertificateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostCertificates201ApplicationJSONActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostCertificates201ApplicationJSONActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostCertificates201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostCertificates201ApplicationJSONActionNullableAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostCertificates201ApplicationJSONActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostCertificates201ApplicationJSONActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostCertificates201ApplicationJSONActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostCertificates201ApplicationJSONCertificateStatusError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
class PostCertificates201ApplicationJSONCertificateStatusIssuanceEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

class PostCertificates201ApplicationJSONCertificateStatusRenewalEnum(str, Enum):
    SCHEDULED = "scheduled"
    PENDING = "pending"
    FAILED = "failed"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class PostCertificates201ApplicationJSONCertificateStatus:
    error: Optional[PostCertificates201ApplicationJSONCertificateStatusError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    issuance: Optional[PostCertificates201ApplicationJSONCertificateStatusIssuanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuance' }})
    renewal: Optional[PostCertificates201ApplicationJSONCertificateStatusRenewalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewal' }})
    
class PostCertificates201ApplicationJSONCertificateTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class PostCertificates201ApplicationJSONCertificateUsedBy:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostCertificates201ApplicationJSONCertificateCertificate:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    domain_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_names' }})
    fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    not_valid_after: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not_valid_after' }})
    not_valid_before: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not_valid_before' }})
    status: Optional[PostCertificates201ApplicationJSONCertificateStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[PostCertificates201ApplicationJSONCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    used_by: List[PostCertificates201ApplicationJSONCertificateUsedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used_by' }})
    

@dataclass_json
@dataclass
class PostCertificates201ApplicationJSONCreateCertificateResponse:
    action: Optional[PostCertificates201ApplicationJSONActionNullableAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    certificate: PostCertificates201ApplicationJSONCertificateCertificate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    

@dataclass
class PostCertificatesResponse:
    content_type: str = field(default=None)
    create_certificate_response: Optional[PostCertificates201ApplicationJSONCreateCertificateResponse] = field(default=None)
    status_code: int = field(default=None)
    
