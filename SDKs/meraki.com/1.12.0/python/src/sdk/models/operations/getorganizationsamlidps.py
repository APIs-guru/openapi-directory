from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSamlIdpsPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSamlIdpsRequest:
    path_params: GetOrganizationSamlIdpsPathParams = field()
    

@dataclass
class GetOrganizationSamlIdpsResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_saml_idps_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
