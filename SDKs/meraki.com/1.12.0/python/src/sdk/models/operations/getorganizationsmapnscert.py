from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSmApnsCertPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSmApnsCertRequest:
    path_params: GetOrganizationSmApnsCertPathParams = field()
    

@dataclass
class GetOrganizationSmApnsCertResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_sm_apns_cert_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
