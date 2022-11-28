from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetOrganizationApplianceVpnStatusesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationApplianceVpnStatusesQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    network_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'networkIds', 'style': 'form', 'explode': False }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationApplianceVpnStatusesRequest:
    path_params: GetOrganizationApplianceVpnStatusesPathParams = field()
    query_params: GetOrganizationApplianceVpnStatusesQueryParams = field()
    

@dataclass
class GetOrganizationApplianceVpnStatusesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_organization_appliance_vpn_statuses_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
