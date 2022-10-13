from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationConfigTemplatePathParams:
    config_template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationConfigTemplateRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    

@dataclass
class UpdateOrganizationConfigTemplateRequest:
    path_params: UpdateOrganizationConfigTemplatePathParams = field(default=None)
    request: Optional[UpdateOrganizationConfigTemplateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationConfigTemplateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_config_template_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
