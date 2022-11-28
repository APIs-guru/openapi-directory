from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CloneOrganizationPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CloneOrganizationRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class CloneOrganizationRequest:
    path_params: CloneOrganizationPathParams = field()
    request: CloneOrganizationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CloneOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    clone_organization_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
