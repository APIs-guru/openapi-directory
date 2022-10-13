from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationAdaptivePolicySettingsPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationAdaptivePolicySettingsRequestBody:
    enabled_networks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledNetworks' }})
    

@dataclass
class UpdateOrganizationAdaptivePolicySettingsRequest:
    path_params: UpdateOrganizationAdaptivePolicySettingsPathParams = field(default=None)
    request: Optional[UpdateOrganizationAdaptivePolicySettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationAdaptivePolicySettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_adaptive_policy_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
