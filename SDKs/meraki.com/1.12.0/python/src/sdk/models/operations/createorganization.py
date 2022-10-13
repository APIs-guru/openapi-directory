from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateOrganizationRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class CreateOrganizationRequest:
    request: CreateOrganizationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_organization_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
