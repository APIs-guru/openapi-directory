from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationAdminPathParams:
    admin_id: str = field(default=None, metadata={'path_param': { 'field_name': 'adminId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationAdminRequest:
    path_params: DeleteOrganizationAdminPathParams = field(default=None)
    

@dataclass
class DeleteOrganizationAdminResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
