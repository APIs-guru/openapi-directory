from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSamlIdpsPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSamlIdpsRequest:
    path_params: GetOrganizationSamlIdpsPathParams = field(default=None)
    

@dataclass
class GetOrganizationSamlIdpsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_saml_idps_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
