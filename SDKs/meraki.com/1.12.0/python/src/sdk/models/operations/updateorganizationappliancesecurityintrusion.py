from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationApplianceSecurityIntrusionPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    rule_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleId' }})
    

@dataclass_json
@dataclass
class UpdateOrganizationApplianceSecurityIntrusionRequestBody:
    allowed_rules: List[UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedRules' }})
    

@dataclass
class UpdateOrganizationApplianceSecurityIntrusionRequest:
    path_params: UpdateOrganizationApplianceSecurityIntrusionPathParams = field(default=None)
    request: UpdateOrganizationApplianceSecurityIntrusionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationApplianceSecurityIntrusionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
