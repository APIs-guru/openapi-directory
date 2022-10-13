from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationConfigTemplateSwitchProfilePortPathParams:
    config_template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    port_id: str = field(default=None, metadata={'path_param': { 'field_name': 'portId', 'style': 'simple', 'explode': False }})
    profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationConfigTemplateSwitchProfilePortRequest:
    path_params: GetOrganizationConfigTemplateSwitchProfilePortPathParams = field(default=None)
    

@dataclass
class GetOrganizationConfigTemplateSwitchProfilePortResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_config_template_switch_profile_port_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
