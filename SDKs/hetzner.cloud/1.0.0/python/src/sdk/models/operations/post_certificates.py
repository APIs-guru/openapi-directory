from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class PostCertificatesCreateCertificateRequestTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class PostCertificatesCreateCertificateRequest:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    domain_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_names' }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_key' }})
    type: Optional[PostCertificatesCreateCertificateRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostCertificatesRequest:
    request: Optional[PostCertificatesCreateCertificateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseNullableActionError:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseNullableActionResources:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostCertificatesCreateCertificateResponseNullableActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseNullableAction:
    command: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    error: PostCertificatesCreateCertificateResponseNullableActionError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    finished: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    resources: List[PostCertificatesCreateCertificateResponseNullableActionResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    started: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started' }})
    status: PostCertificatesCreateCertificateResponseNullableActionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseCertificateStatusError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
class PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

class PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum(str, Enum):
    SCHEDULED = "scheduled"
    PENDING = "pending"
    FAILED = "failed"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseCertificateStatus:
    error: Optional[PostCertificatesCreateCertificateResponseCertificateStatusError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    issuance: Optional[PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuance' }})
    renewal: Optional[PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewal' }})
    
class PostCertificatesCreateCertificateResponseCertificateTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseCertificateUsedBy:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseCertificate:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    domain_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_names' }})
    fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    not_valid_after: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not_valid_after' }})
    not_valid_before: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not_valid_before' }})
    status: Optional[PostCertificatesCreateCertificateResponseCertificateStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[PostCertificatesCreateCertificateResponseCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    used_by: List[PostCertificatesCreateCertificateResponseCertificateUsedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used_by' }})
    

@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponse:
    action: Optional[PostCertificatesCreateCertificateResponseNullableAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    certificate: PostCertificatesCreateCertificateResponseCertificate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    

@dataclass
class PostCertificatesResponse:
    content_type: str = field(default=None)
    create_certificate_response: Optional[PostCertificatesCreateCertificateResponse] = field(default=None)
    status_code: int = field(default=None)
    
