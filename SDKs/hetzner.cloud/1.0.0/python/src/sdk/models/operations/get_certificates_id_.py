from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetCertificatesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetCertificatesIDCertificateResponseCertificateStatusError:
    r"""GetCertificatesIDCertificateResponseCertificateStatusError
    If issuance or renewal reports `failed`, this property contains information about what happened
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
class GetCertificatesIDCertificateResponseCertificateStatusIssuanceEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

class GetCertificatesIDCertificateResponseCertificateStatusRenewalEnum(str, Enum):
    SCHEDULED = "scheduled"
    PENDING = "pending"
    FAILED = "failed"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class GetCertificatesIDCertificateResponseCertificateStatus:
    r"""GetCertificatesIDCertificateResponseCertificateStatus
    Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
    """
    
    error: Optional[GetCertificatesIDCertificateResponseCertificateStatusError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    issuance: Optional[GetCertificatesIDCertificateResponseCertificateStatusIssuanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuance') }})
    renewal: Optional[GetCertificatesIDCertificateResponseCertificateStatusRenewalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal') }})
    
class GetCertificatesIDCertificateResponseCertificateTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class GetCertificatesIDCertificateResponseCertificateUsedBy:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetCertificatesIDCertificateResponseCertificate:
    certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    domain_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_names') }})
    fingerprint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    not_valid_after: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_after') }})
    not_valid_before: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_before') }})
    used_by: List[GetCertificatesIDCertificateResponseCertificateUsedBy] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used_by') }})
    status: Optional[GetCertificatesIDCertificateResponseCertificateStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[GetCertificatesIDCertificateResponseCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetCertificatesIDCertificateResponse:
    certificate: GetCertificatesIDCertificateResponseCertificate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    

@dataclass
class GetCertificatesIDRequest:
    path_params: GetCertificatesIDPathParams = field()
    

@dataclass
class GetCertificatesIDResponse:
    content_type: str = field()
    status_code: int = field()
    certificate_response: Optional[GetCertificatesIDCertificateResponse] = field(default=None)
    
