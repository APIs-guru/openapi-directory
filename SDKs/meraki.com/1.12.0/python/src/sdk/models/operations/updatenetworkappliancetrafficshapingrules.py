from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceTrafficShapingRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"
    LOCAL_NET = "localNet"


@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions:
    type: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits:
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitDown' }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitUp' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits:
    bandwidth_limits: Optional[UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthLimits' }})
    settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules:
    definitions: List[UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definitions' }})
    dscp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dscpTagValue' }})
    per_client_bandwidth_limits: Optional[UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perClientBandwidthLimits' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequestBody:
    default_rules_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultRulesEnabled' }})
    rules: Optional[List[UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingRulesRequest:
    path_params: UpdateNetworkApplianceTrafficShapingRulesPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceTrafficShapingRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_traffic_shaping_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
