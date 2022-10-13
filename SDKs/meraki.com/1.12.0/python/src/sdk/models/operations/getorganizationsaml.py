from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSamlPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSamlRequest:
    path_params: GetOrganizationSamlPathParams = field(default=None)
    

@dataclass
class GetOrganizationSamlResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_saml_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
