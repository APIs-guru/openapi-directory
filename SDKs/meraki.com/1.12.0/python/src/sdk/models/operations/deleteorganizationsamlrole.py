from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationSamlRolePathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    saml_role_id: str = field(default=None, metadata={'path_param': { 'field_name': 'samlRoleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationSamlRoleRequest:
    path_params: DeleteOrganizationSamlRolePathParams = field(default=None)
    

@dataclass
class DeleteOrganizationSamlRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
