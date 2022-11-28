from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationConfigTemplateSwitchProfilesPathParams:
    config_template_id: str = field(metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationConfigTemplateSwitchProfilesRequest:
    path_params: GetOrganizationConfigTemplateSwitchProfilesPathParams = field()
    

@dataclass
class GetOrganizationConfigTemplateSwitchProfilesResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_config_template_switch_profiles_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
