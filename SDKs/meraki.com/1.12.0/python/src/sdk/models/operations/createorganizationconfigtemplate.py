from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateOrganizationConfigTemplatePathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateOrganizationConfigTemplateRequestBody:
    copy_from_network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyFromNetworkId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    

@dataclass
class CreateOrganizationConfigTemplateRequest:
    path_params: CreateOrganizationConfigTemplatePathParams = field(default=None)
    request: CreateOrganizationConfigTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationConfigTemplateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_organization_config_template_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
