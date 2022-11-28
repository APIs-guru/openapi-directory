from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateOrganizationConfigTemplatePathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateOrganizationConfigTemplateRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    copy_from_network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyFromNetworkId') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    

@dataclass
class CreateOrganizationConfigTemplateRequest:
    path_params: CreateOrganizationConfigTemplatePathParams = field()
    request: CreateOrganizationConfigTemplateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationConfigTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    create_organization_config_template_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
