from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class GetOrganizationLicensesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class GetOrganizationLicensesStateEnum(str, Enum):
    ACTIVE = "active"
    EXPIRED = "expired"
    EXPIRING = "expiring"
    UNUSED = "unused"
    UNUSED_ACTIVE = "unusedActive"
    RECENTLY_QUEUED = "recentlyQueued"


@dataclass
class GetOrganizationLicensesQueryParams:
    device_serial: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceSerial', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    network_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'networkId', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    state: Optional[GetOrganizationLicensesStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationLicensesRequest:
    path_params: GetOrganizationLicensesPathParams = field(default=None)
    query_params: GetOrganizationLicensesQueryParams = field(default=None)
    

@dataclass
class GetOrganizationLicensesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_organization_licenses_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
