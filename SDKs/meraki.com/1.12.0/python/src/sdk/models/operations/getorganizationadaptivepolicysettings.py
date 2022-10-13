from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationAdaptivePolicySettingsPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationAdaptivePolicySettingsRequest:
    path_params: GetOrganizationAdaptivePolicySettingsPathParams = field(default=None)
    

@dataclass
class GetOrganizationAdaptivePolicySettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_adaptive_policy_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
