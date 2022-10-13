from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationCameraOnboardingStatusesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationCameraOnboardingStatusesRequestBody:
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    wireless_credentials_sent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wirelessCredentialsSent' }})
    

@dataclass
class UpdateOrganizationCameraOnboardingStatusesRequest:
    path_params: UpdateOrganizationCameraOnboardingStatusesPathParams = field(default=None)
    request: Optional[UpdateOrganizationCameraOnboardingStatusesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationCameraOnboardingStatusesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_camera_onboarding_statuses_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
