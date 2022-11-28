from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSamlRolePathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    saml_role_id: str = field(metadata={'path_param': { 'field_name': 'samlRoleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSamlRoleRequest:
    path_params: GetOrganizationSamlRolePathParams = field()
    

@dataclass
class GetOrganizationSamlRoleResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_saml_role_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
