from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationAPIRequestsOverviewPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationAPIRequestsOverviewQueryParams:
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationAPIRequestsOverviewRequest:
    path_params: GetOrganizationAPIRequestsOverviewPathParams = field()
    query_params: GetOrganizationAPIRequestsOverviewQueryParams = field()
    

@dataclass
class GetOrganizationAPIRequestsOverviewResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_api_requests_overview_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
