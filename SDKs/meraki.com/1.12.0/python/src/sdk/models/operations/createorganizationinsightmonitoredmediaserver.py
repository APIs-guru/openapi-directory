from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateOrganizationInsightMonitoredMediaServerPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateOrganizationInsightMonitoredMediaServerRequestBody:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    best_effort_monitoring_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bestEffortMonitoringEnabled' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class CreateOrganizationInsightMonitoredMediaServerRequest:
    path_params: CreateOrganizationInsightMonitoredMediaServerPathParams = field(default=None)
    request: CreateOrganizationInsightMonitoredMediaServerRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationInsightMonitoredMediaServerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_organization_insight_monitored_media_server_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
