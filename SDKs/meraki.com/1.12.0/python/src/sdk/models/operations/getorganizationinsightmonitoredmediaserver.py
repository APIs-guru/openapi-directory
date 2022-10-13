from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationInsightMonitoredMediaServerPathParams:
    monitored_media_server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'monitoredMediaServerId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationInsightMonitoredMediaServerRequest:
    path_params: GetOrganizationInsightMonitoredMediaServerPathParams = field(default=None)
    

@dataclass
class GetOrganizationInsightMonitoredMediaServerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_insight_monitored_media_server_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
