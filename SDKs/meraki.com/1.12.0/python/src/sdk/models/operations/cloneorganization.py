from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CloneOrganizationPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CloneOrganizationRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class CloneOrganizationRequest:
    path_params: CloneOrganizationPathParams = field(default=None)
    request: CloneOrganizationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CloneOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    clone_organization_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
