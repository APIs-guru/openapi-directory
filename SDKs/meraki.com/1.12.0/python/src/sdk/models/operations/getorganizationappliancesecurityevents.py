from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum


@dataclass
class GetOrganizationApplianceSecurityEventsPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class GetOrganizationApplianceSecurityEventsSortOrderEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"


@dataclass
class GetOrganizationApplianceSecurityEventsQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetOrganizationApplianceSecurityEventsSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationApplianceSecurityEventsRequest:
    path_params: GetOrganizationApplianceSecurityEventsPathParams = field()
    query_params: GetOrganizationApplianceSecurityEventsQueryParams = field()
    

@dataclass
class GetOrganizationApplianceSecurityEventsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_organization_appliance_security_events_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
