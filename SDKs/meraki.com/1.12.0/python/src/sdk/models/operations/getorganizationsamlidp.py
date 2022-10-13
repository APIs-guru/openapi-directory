from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSamlIdpPathParams:
    idp_id: str = field(default=None, metadata={'path_param': { 'field_name': 'idpId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSamlIdpRequest:
    path_params: GetOrganizationSamlIdpPathParams = field(default=None)
    

@dataclass
class GetOrganizationSamlIdpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_saml_idp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
