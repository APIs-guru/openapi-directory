from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSmApnsCertPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSmApnsCertRequest:
    path_params: GetOrganizationSmApnsCertPathParams = field(default=None)
    

@dataclass
class GetOrganizationSmApnsCertResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_sm_apns_cert_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
