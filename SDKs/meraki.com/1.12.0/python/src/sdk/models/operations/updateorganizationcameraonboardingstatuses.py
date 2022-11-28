from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationCameraOnboardingStatusesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationCameraOnboardingStatusesRequestBody:
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    wireless_credentials_sent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wirelessCredentialsSent') }})
    

@dataclass
class UpdateOrganizationCameraOnboardingStatusesRequest:
    path_params: UpdateOrganizationCameraOnboardingStatusesPathParams = field()
    request: Optional[UpdateOrganizationCameraOnboardingStatusesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationCameraOnboardingStatusesResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_camera_onboarding_statuses_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
