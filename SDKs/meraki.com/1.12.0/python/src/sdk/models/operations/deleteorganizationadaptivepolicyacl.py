from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationAdaptivePolicyACLPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationAdaptivePolicyACLRequest:
    path_params: DeleteOrganizationAdaptivePolicyACLPathParams = field()
    

@dataclass
class DeleteOrganizationAdaptivePolicyACLResponse:
    content_type: str = field()
    status_code: int = field()
    
