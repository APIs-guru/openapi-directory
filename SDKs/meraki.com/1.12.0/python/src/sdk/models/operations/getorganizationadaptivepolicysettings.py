from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationAdaptivePolicySettingsPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationAdaptivePolicySettingsRequest:
    path_params: GetOrganizationAdaptivePolicySettingsPathParams = field()
    

@dataclass
class GetOrganizationAdaptivePolicySettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_adaptive_policy_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
