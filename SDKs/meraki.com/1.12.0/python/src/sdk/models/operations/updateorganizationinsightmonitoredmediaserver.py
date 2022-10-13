from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationInsightMonitoredMediaServerPathParams:
    monitored_media_server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'monitoredMediaServerId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationInsightMonitoredMediaServerRequestBody:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    best_effort_monitoring_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bestEffortMonitoringEnabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class UpdateOrganizationInsightMonitoredMediaServerRequest:
    path_params: UpdateOrganizationInsightMonitoredMediaServerPathParams = field(default=None)
    request: Optional[UpdateOrganizationInsightMonitoredMediaServerRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationInsightMonitoredMediaServerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_insight_monitored_media_server_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
