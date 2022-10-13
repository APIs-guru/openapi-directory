from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationAPIRequestsOverviewPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationAPIRequestsOverviewQueryParams:
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationAPIRequestsOverviewRequest:
    path_params: GetOrganizationAPIRequestsOverviewPathParams = field(default=None)
    query_params: GetOrganizationAPIRequestsOverviewQueryParams = field(default=None)
    

@dataclass
class GetOrganizationAPIRequestsOverviewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_api_requests_overview_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
