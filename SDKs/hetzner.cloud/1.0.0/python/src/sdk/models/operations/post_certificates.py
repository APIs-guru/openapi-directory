from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostCertificatesCreateCertificateRequestTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class PostCertificatesCreateCertificateRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    domain_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_names') }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_key') }})
    type: Optional[PostCertificatesCreateCertificateRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseNullableActionError:
    r"""PostCertificatesCreateCertificateResponseNullableActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseNullableActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostCertificatesCreateCertificateResponseNullableActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseNullableAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostCertificatesCreateCertificateResponseNullableActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostCertificatesCreateCertificateResponseNullableActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostCertificatesCreateCertificateResponseNullableActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseCertificateStatusError:
    r"""PostCertificatesCreateCertificateResponseCertificateStatusError
    If issuance or renewal reports `failed`, this property contains information about what happened
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
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
    r"""PostCertificatesCreateCertificateResponseCertificateStatus
    Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
    """
    
    error: Optional[PostCertificatesCreateCertificateResponseCertificateStatusError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    issuance: Optional[PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuance') }})
    renewal: Optional[PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal') }})
    
class PostCertificatesCreateCertificateResponseCertificateTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseCertificateUsedBy:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponseCertificate:
    certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    domain_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_names') }})
    fingerprint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    not_valid_after: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_after') }})
    not_valid_before: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_before') }})
    used_by: List[PostCertificatesCreateCertificateResponseCertificateUsedBy] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used_by') }})
    status: Optional[PostCertificatesCreateCertificateResponseCertificateStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[PostCertificatesCreateCertificateResponseCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostCertificatesCreateCertificateResponse:
    certificate: PostCertificatesCreateCertificateResponseCertificate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    action: Optional[PostCertificatesCreateCertificateResponseNullableAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostCertificatesRequest:
    request: Optional[PostCertificatesCreateCertificateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCertificatesResponse:
    content_type: str = field()
    status_code: int = field()
    create_certificate_response: Optional[PostCertificatesCreateCertificateResponse] = field(default=None)
    
