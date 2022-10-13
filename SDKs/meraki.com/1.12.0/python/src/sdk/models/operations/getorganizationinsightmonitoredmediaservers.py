from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationInsightMonitoredMediaServersPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationInsightMonitoredMediaServersRequest:
    path_params: GetOrganizationInsightMonitoredMediaServersPathParams = field(default=None)
    

@dataclass
class GetOrganizationInsightMonitoredMediaServersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_insight_monitored_media_servers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
