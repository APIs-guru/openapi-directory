from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationApplianceSecurityIntrusionPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationApplianceSecurityIntrusionRequest:
    path_params: GetOrganizationApplianceSecurityIntrusionPathParams = field(default=None)
    

@dataclass
class GetOrganizationApplianceSecurityIntrusionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
