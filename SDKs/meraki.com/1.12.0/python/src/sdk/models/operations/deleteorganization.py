from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationRequest:
    path_params: DeleteOrganizationPathParams = field(default=None)
    

@dataclass
class DeleteOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
