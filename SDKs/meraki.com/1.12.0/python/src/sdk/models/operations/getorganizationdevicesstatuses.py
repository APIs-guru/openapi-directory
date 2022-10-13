from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetOrganizationDevicesStatusesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationDevicesStatusesQueryParams:
    components: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'components', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationDevicesStatusesRequest:
    path_params: GetOrganizationDevicesStatusesPathParams = field(default=None)
    query_params: GetOrganizationDevicesStatusesQueryParams = field(default=None)
    

@dataclass
class GetOrganizationDevicesStatusesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_organization_devices_statuses_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
