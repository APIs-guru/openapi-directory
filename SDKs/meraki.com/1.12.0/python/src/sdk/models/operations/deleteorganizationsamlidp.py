from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationSamlIdpPathParams:
    idp_id: str = field(metadata={'path_param': { 'field_name': 'idpId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationSamlIdpRequest:
    path_params: DeleteOrganizationSamlIdpPathParams = field()
    

@dataclass
class DeleteOrganizationSamlIdpResponse:
    content_type: str = field()
    status_code: int = field()
    
