from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationSamlIdpPathParams:
    idp_id: str = field(default=None, metadata={'path_param': { 'field_name': 'idpId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationSamlIdpRequest:
    path_params: DeleteOrganizationSamlIdpPathParams = field(default=None)
    

@dataclass
class DeleteOrganizationSamlIdpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
