from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"
    LOCAL_NET = "localNet"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions:
    type: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits:
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitDown' }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitUp' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits:
    bandwidth_limits: Optional[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthLimits' }})
    settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules:
    definitions: List[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definitions' }})
    dscp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dscpTagValue' }})
    pcp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pcpTagValue' }})
    per_client_bandwidth_limits: Optional[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perClientBandwidthLimits' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody:
    default_rules_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultRulesEnabled' }})
    rules: Optional[List[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    traffic_shaping_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficShapingEnabled' }})
    

@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequest:
    path_params: UpdateNetworkWirelessSsidTrafficShapingRulesPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_ssid_traffic_shaping_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
