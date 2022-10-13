from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationSamlPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationSamlRequestBody:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass
class UpdateOrganizationSamlRequest:
    path_params: UpdateOrganizationSamlPathParams = field(default=None)
    request: Optional[UpdateOrganizationSamlRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationSamlResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_saml_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
