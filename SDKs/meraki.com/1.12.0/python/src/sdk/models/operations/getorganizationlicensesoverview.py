from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationLicensesOverviewPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationLicensesOverviewRequest:
    path_params: GetOrganizationLicensesOverviewPathParams = field()
    

@dataclass
class GetOrganizationLicensesOverviewResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_licenses_overview_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
