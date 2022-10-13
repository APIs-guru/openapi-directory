from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationConfigTemplatePathParams:
    config_template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationConfigTemplateRequest:
    path_params: GetOrganizationConfigTemplatePathParams = field(default=None)
    

@dataclass
class GetOrganizationConfigTemplateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_config_template_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
