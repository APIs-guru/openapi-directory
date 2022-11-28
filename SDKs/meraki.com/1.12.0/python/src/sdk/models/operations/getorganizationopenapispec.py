from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationOpenapiSpecPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationOpenapiSpecRequest:
    path_params: GetOrganizationOpenapiSpecPathParams = field()
    

@dataclass
class GetOrganizationOpenapiSpecResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_openapi_spec_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
