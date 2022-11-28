from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationInsightMonitoredMediaServersPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationInsightMonitoredMediaServersRequest:
    path_params: GetOrganizationInsightMonitoredMediaServersPathParams = field()
    

@dataclass
class GetOrganizationInsightMonitoredMediaServersResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_insight_monitored_media_servers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
