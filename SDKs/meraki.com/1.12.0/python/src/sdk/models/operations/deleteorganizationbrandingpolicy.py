from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationBrandingPolicyPathParams:
    branding_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'brandingPolicyId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationBrandingPolicyRequest:
    path_params: DeleteOrganizationBrandingPolicyPathParams = field(default=None)
    

@dataclass
class DeleteOrganizationBrandingPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
