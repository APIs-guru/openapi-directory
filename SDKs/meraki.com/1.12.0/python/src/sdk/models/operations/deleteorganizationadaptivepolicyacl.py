from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationAdaptivePolicyACLPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationAdaptivePolicyACLRequest:
    path_params: DeleteOrganizationAdaptivePolicyACLPathParams = field(default=None)
    

@dataclass
class DeleteOrganizationAdaptivePolicyACLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
