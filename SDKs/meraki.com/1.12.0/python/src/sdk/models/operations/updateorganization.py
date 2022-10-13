from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationRequestBodyAPI:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class UpdateOrganizationRequestBody:
    api: Optional[UpdateOrganizationRequestBodyAPI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class UpdateOrganizationRequest:
    path_params: UpdateOrganizationPathParams = field(default=None)
    request: Optional[UpdateOrganizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
