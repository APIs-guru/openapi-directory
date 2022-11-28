from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationApplianceSecurityIntrusionPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules:
    rule_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class UpdateOrganizationApplianceSecurityIntrusionRequestBody:
    allowed_rules: List[UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedRules') }})
    

@dataclass
class UpdateOrganizationApplianceSecurityIntrusionRequest:
    path_params: UpdateOrganizationApplianceSecurityIntrusionPathParams = field()
    request: UpdateOrganizationApplianceSecurityIntrusionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationApplianceSecurityIntrusionResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
