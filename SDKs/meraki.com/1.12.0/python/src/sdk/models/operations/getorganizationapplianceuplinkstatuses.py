from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetOrganizationApplianceUplinkStatusesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationApplianceUplinkStatusesQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    iccids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'iccids', 'style': 'form', 'explode': False }})
    network_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'networkIds', 'style': 'form', 'explode': False }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    serials: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'serials', 'style': 'form', 'explode': False }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationApplianceUplinkStatusesRequest:
    path_params: GetOrganizationApplianceUplinkStatusesPathParams = field()
    query_params: GetOrganizationApplianceUplinkStatusesQueryParams = field()
    

@dataclass
class GetOrganizationApplianceUplinkStatusesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_organization_appliance_uplink_statuses_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
