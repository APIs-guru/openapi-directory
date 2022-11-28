from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationSamlRolePathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    saml_role_id: str = field(metadata={'path_param': { 'field_name': 'samlRoleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationSamlRoleRequest:
    path_params: DeleteOrganizationSamlRolePathParams = field()
    

@dataclass
class DeleteOrganizationSamlRoleResponse:
    content_type: str = field()
    status_code: int = field()
    
