from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationInsightApplicationsPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationInsightApplicationsRequest:
    path_params: GetOrganizationInsightApplicationsPathParams = field()
    

@dataclass
class GetOrganizationInsightApplicationsResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_insight_applications_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
