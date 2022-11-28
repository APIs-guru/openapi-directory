from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationConfigTemplateSwitchProfilePortsPathParams:
    config_template_id: str = field(metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationConfigTemplateSwitchProfilePortsRequest:
    path_params: GetOrganizationConfigTemplateSwitchProfilePortsPathParams = field()
    

@dataclass
class GetOrganizationConfigTemplateSwitchProfilePortsResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_config_template_switch_profile_ports_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
