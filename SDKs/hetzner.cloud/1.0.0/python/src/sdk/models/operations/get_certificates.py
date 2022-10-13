from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    

@dataclass
class GetCertificatesRequest:
    query_params: GetCertificatesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetCertificates200ApplicationJSONCertificatesStatusError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
class GetCertificates200ApplicationJSONCertificatesStatusIssuanceEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

class GetCertificates200ApplicationJSONCertificatesStatusRenewalEnum(str, Enum):
    SCHEDULED = "scheduled"
    PENDING = "pending"
    FAILED = "failed"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclass
class GetCertificates200ApplicationJSONCertificatesStatus:
    error: Optional[GetCertificates200ApplicationJSONCertificatesStatusError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    issuance: Optional[GetCertificates200ApplicationJSONCertificatesStatusIssuanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuance' }})
    renewal: Optional[GetCertificates200ApplicationJSONCertificatesStatusRenewalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewal' }})
    
class GetCertificates200ApplicationJSONCertificatesTypeEnum(str, Enum):
    UPLOADED = "uploaded"
    MANAGED = "managed"


@dataclass_json
@dataclass
class GetCertificates200ApplicationJSONCertificatesUsedBy:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetCertificates200ApplicationJSONCertificatesCertificate:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    domain_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_names' }})
    fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    not_valid_after: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not_valid_after' }})
    not_valid_before: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not_valid_before' }})
    status: Optional[GetCertificates200ApplicationJSONCertificatesStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[GetCertificates200ApplicationJSONCertificatesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    used_by: List[GetCertificates200ApplicationJSONCertificatesUsedBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used_by' }})
    

@dataclass_json
@dataclass
class GetCertificates200ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class GetCertificates200ApplicationJSONMeta:
    pagination: GetCertificates200ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetCertificates200ApplicationJSONCertificatesResponse:
    certificates: List[GetCertificates200ApplicationJSONCertificatesCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    meta: Optional[GetCertificates200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetCertificatesResponse:
    certificates_response: Optional[GetCertificates200ApplicationJSONCertificatesResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
