from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationRequest:
    path_params: DeleteOrganizationPathParams = field()
    

@dataclass
class DeleteOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    
