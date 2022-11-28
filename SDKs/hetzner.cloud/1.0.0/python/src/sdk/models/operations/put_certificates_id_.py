from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutCertificatesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutCertificatesIDUpdateCertificateRequest:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PutCertificatesIDCertificateResponseCertificateStatusError:
    r"""PutCertificatesIDCertificateResponseCertificateStatusError
    If issuance or renewal reports `failed`, this property contains information about what happened
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
class PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

class PutCertificatesIDCertificateResponseCertificateStatusRenewalEnum(str, Enum):
    SCHEDULED = "scheduled"
    PENDING = "pending"
    FAILED = "failed"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class PutCertificatesIDCertificateResponseCertificateStatus:
    r"""PutCertificatesIDCertificateResponseCertificateStatus
    Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
    """
    
    error: Optional[PutCertificatesIDCertificateResponseCertificateStatusError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    issuance: Optional[PutCertificatesIDCertificateResponseCertificateStatusIssuanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuance') }})
    renewal: Optional[PutCertificatesIDCertificateResponseCertificateStatusRenewalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal') }})
    
class PutCertificatesIDCertificateResponseCertificateTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class PutCertificatesIDCertificateResponseCertificateUsedBy:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PutCertificatesIDCertificateResponseCertificate:
    certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    domain_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_names') }})
    fingerprint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    not_valid_after: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_after') }})
    not_valid_before: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_before') }})
    used_by: List[PutCertificatesIDCertificateResponseCertificateUsedBy] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used_by') }})
    status: Optional[PutCertificatesIDCertificateResponseCertificateStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[PutCertificatesIDCertificateResponseCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PutCertificatesIDCertificateResponse:
    certificate: PutCertificatesIDCertificateResponseCertificate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    

@dataclass
class PutCertificatesIDRequest:
    path_params: PutCertificatesIDPathParams = field()
    request: Optional[PutCertificatesIDUpdateCertificateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCertificatesIDResponse:
    content_type: str = field()
    status_code: int = field()
    certificate_response: Optional[PutCertificatesIDCertificateResponse] = field(default=None)
    
