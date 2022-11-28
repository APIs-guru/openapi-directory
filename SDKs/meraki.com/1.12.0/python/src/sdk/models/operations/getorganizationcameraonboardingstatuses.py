from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetOrganizationCameraOnboardingStatusesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationCameraOnboardingStatusesQueryParams:
    network_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'networkIds', 'style': 'form', 'explode': False }})
    serials: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'serials', 'style': 'form', 'explode': False }})
    

@dataclass
class GetOrganizationCameraOnboardingStatusesRequest:
    path_params: GetOrganizationCameraOnboardingStatusesPathParams = field()
    query_params: GetOrganizationCameraOnboardingStatusesQueryParams = field()
    

@dataclass
class GetOrganizationCameraOnboardingStatusesResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_camera_onboarding_statuses_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
