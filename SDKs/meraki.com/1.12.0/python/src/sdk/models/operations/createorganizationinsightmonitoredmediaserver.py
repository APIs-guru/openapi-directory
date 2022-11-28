from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateOrganizationInsightMonitoredMediaServerPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateOrganizationInsightMonitoredMediaServerRequestBody:
    address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    best_effort_monitoring_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestEffortMonitoringEnabled') }})
    

@dataclass
class CreateOrganizationInsightMonitoredMediaServerRequest:
    path_params: CreateOrganizationInsightMonitoredMediaServerPathParams = field()
    request: CreateOrganizationInsightMonitoredMediaServerRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationInsightMonitoredMediaServerResponse:
    content_type: str = field()
    status_code: int = field()
    create_organization_insight_monitored_media_server_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
