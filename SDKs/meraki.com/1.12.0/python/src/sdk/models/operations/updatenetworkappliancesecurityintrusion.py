from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceSecurityIntrusionPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
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
    excluded_cidr: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedCidr' }})
    included_cidr: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedCidr' }})
    use_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDefault' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceSecurityIntrusionRequestBody:
    ids_rulesets: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idsRulesets' }})
    mode: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    protected_networks: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectedNetworks' }})
    

@dataclass
class UpdateNetworkApplianceSecurityIntrusionRequest:
    path_params: UpdateNetworkApplianceSecurityIntrusionPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceSecurityIntrusionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceSecurityIntrusionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
