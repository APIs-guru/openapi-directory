from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationInsightMonitoredMediaServerPathParams:
    monitored_media_server_id: str = field(metadata={'path_param': { 'field_name': 'monitoredMediaServerId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationInsightMonitoredMediaServerRequestBody:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    best_effort_monitoring_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestEffortMonitoringEnabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class UpdateOrganizationInsightMonitoredMediaServerRequest:
    path_params: UpdateOrganizationInsightMonitoredMediaServerPathParams = field()
    request: Optional[UpdateOrganizationInsightMonitoredMediaServerRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationInsightMonitoredMediaServerResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_insight_monitored_media_server_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
