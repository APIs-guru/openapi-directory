from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationBrandingPolicyPathParams:
    branding_policy_id: str = field(metadata={'path_param': { 'field_name': 'brandingPolicyId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationBrandingPolicyRequest:
    path_params: DeleteOrganizationBrandingPolicyPathParams = field()
    

@dataclass
class DeleteOrganizationBrandingPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    
