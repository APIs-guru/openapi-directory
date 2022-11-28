from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateOrganizationRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class CreateOrganizationRequest:
    request: CreateOrganizationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    create_organization_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
