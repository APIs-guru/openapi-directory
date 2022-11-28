from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetCertificatesSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"

class GetCertificatesTypeParameterTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass
class GetCertificatesQueryParams:
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetCertificatesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[GetCertificatesTypeParameterTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetCertificatesCertificatesResponseCertificateStatusError:
    r"""GetCertificatesCertificatesResponseCertificateStatusError
    If issuance or renewal reports `failed`, this property contains information about what happened
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
class GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

class GetCertificatesCertificatesResponseCertificateStatusRenewalEnum(str, Enum):
    SCHEDULED = "scheduled"
    PENDING = "pending"
    FAILED = "failed"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class GetCertificatesCertificatesResponseCertificateStatus:
    r"""GetCertificatesCertificatesResponseCertificateStatus
    Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
    """
    
    error: Optional[GetCertificatesCertificatesResponseCertificateStatusError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    issuance: Optional[GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuance') }})
    renewal: Optional[GetCertificatesCertificatesResponseCertificateStatusRenewalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewal') }})
    
class GetCertificatesCertificatesResponseCertificateTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class GetCertificatesCertificatesResponseCertificateUsedBy:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetCertificatesCertificatesResponseCertificate:
    certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    domain_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_names') }})
    fingerprint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    not_valid_after: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_after') }})
    not_valid_before: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_valid_before') }})
    used_by: List[GetCertificatesCertificatesResponseCertificateUsedBy] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('used_by') }})
    status: Optional[GetCertificatesCertificatesResponseCertificateStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[GetCertificatesCertificatesResponseCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetCertificatesCertificatesResponseMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class GetCertificatesCertificatesResponseMeta:
    pagination: GetCertificatesCertificatesResponseMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetCertificatesCertificatesResponse:
    certificates: List[GetCertificatesCertificatesResponseCertificate] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    meta: Optional[GetCertificatesCertificatesResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetCertificatesRequest:
    query_params: GetCertificatesQueryParams = field()
    

@dataclass
class GetCertificatesResponse:
    content_type: str = field()
    status_code: int = field()
    certificates_response: Optional[GetCertificatesCertificatesResponse] = field(default=None)
    
