from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationAdminsPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationAdminsRequest:
    path_params: GetOrganizationAdminsPathParams = field()
    

@dataclass
class GetOrganizationAdminsResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_admins_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
