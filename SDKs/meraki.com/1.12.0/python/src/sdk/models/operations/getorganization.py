from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationRequest:
    path_params: GetOrganizationPathParams = field()
    

@dataclass
class GetOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
