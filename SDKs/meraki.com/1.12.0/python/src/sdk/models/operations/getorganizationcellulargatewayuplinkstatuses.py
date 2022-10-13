from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetOrganizationCellularGatewayUplinkStatusesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationCellularGatewayUplinkStatusesQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    iccids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'iccids', 'style': 'form', 'explode': False }})
    network_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'networkIds', 'style': 'form', 'explode': False }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    serials: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'serials', 'style': 'form', 'explode': False }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationCellularGatewayUplinkStatusesRequest:
    path_params: GetOrganizationCellularGatewayUplinkStatusesPathParams = field(default=None)
    query_params: GetOrganizationCellularGatewayUplinkStatusesQueryParams = field(default=None)
    

@dataclass
class GetOrganizationCellularGatewayUplinkStatusesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_organization_cellular_gateway_uplink_statuses_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
