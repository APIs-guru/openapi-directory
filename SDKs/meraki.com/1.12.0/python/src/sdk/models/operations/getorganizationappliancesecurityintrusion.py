from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationApplianceSecurityIntrusionPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationApplianceSecurityIntrusionRequest:
    path_params: GetOrganizationApplianceSecurityIntrusionPathParams = field()
    

@dataclass
class GetOrganizationApplianceSecurityIntrusionResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
