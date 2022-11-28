from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceSecurityIntrusionPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum(str, Enum):
    CONNECTIVITY = "connectivity"
    BALANCED = "balanced"
    SECURITY = "security"

class UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum(str, Enum):
    PREVENTION = "prevention"
    DETECTION = "detection"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks:
    r"""UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks
    Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
    """
    
    excluded_cidr: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedCidr') }})
    included_cidr: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedCidr') }})
    use_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefault') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceSecurityIntrusionRequestBody:
    ids_rulesets: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idsRulesets') }})
    mode: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    protected_networks: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedNetworks') }})
    

@dataclass
class UpdateNetworkApplianceSecurityIntrusionRequest:
    path_params: UpdateNetworkApplianceSecurityIntrusionPathParams = field()
    request: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceSecurityIntrusionResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
