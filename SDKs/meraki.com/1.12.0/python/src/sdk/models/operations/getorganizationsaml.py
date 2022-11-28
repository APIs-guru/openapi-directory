from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSamlPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSamlRequest:
    path_params: GetOrganizationSamlPathParams = field()
    

@dataclass
class GetOrganizationSamlResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_saml_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
