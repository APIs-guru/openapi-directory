from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSamlIdpPathParams:
    idp_id: str = field(metadata={'path_param': { 'field_name': 'idpId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSamlIdpRequest:
    path_params: GetOrganizationSamlIdpPathParams = field()
    

@dataclass
class GetOrganizationSamlIdpResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_saml_idp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
