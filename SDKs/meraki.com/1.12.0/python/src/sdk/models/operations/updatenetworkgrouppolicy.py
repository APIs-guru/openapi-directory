from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkGroupPolicyPathParams:
    group_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupPolicyId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits:
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitDown' }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitUp' }})
    
class UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyBandwidth:
    bandwidth_limits: Optional[UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthLimits' }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum(str, Enum):
    ALL_SERVICES = "All Services"
    AIR_PLAY = "AirPlay"
    AFP = "AFP"
    BIT_TORRENT = "BitTorrent"
    FTP = "FTP"
    I_CHAT = "iChat"
    I_TUNES = "iTunes"
    PRINTERS = "Printers"
    SAMBA = "Samba"
    SCANNERS = "Scanners"
    SSH = "SSH"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    services: List[UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    vlan_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    
class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyBonjourForwarding:
    rules: Optional[List[UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
class UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns:
    patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patterns' }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories:
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns:
    patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patterns' }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFiltering:
    allowed_url_patterns: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedUrlPatterns' }})
    blocked_url_categories: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockedUrlCategories' }})
    blocked_url_patterns: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockedUrlPatterns' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    dest_cidr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destCidr' }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destPort' }})
    policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    protocol: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum(str, Enum):
    DENY = "deny"

class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules:
    policy: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    type: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"

class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"
    LOCAL_NET = "localNet"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions:
    type: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits:
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitDown' }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitUp' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits:
    bandwidth_limits: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthLimits' }})
    settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules:
    definitions: List[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definitions' }})
    dscp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dscpTagValue' }})
    pcp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pcpTagValue' }})
    per_client_bandwidth_limits: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perClientBandwidthLimits' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping:
    l3_firewall_rules: Optional[List[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l3FirewallRules' }})
    l7_firewall_rules: Optional[List[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l7FirewallRules' }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    traffic_shaping_rules: Optional[List[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficShapingRules' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingFriday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingMonday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingSaturday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingSunday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingThursday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingTuesday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingWednesday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyScheduling:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    friday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingFriday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friday' }})
    monday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingMonday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monday' }})
    saturday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingSaturday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saturday' }})
    sunday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingSunday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sunday' }})
    thursday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingThursday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thursday' }})
    tuesday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingTuesday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tuesday' }})
    wednesday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingWednesday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wednesday' }})
    
class UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    BYPASS = "bypass"

class UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyVlanTagging:
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    vlan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBody:
    bandwidth: Optional[UpdateNetworkGroupPolicyRequestBodyBandwidth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth' }})
    bonjour_forwarding: Optional[UpdateNetworkGroupPolicyRequestBodyBonjourForwarding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bonjourForwarding' }})
    content_filtering: Optional[UpdateNetworkGroupPolicyRequestBodyContentFiltering] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentFiltering' }})
    firewall_and_traffic_shaping: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewallAndTrafficShaping' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    scheduling: Optional[UpdateNetworkGroupPolicyRequestBodyScheduling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduling' }})
    splash_auth_settings: Optional[UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splashAuthSettings' }})
    vlan_tagging: Optional[UpdateNetworkGroupPolicyRequestBodyVlanTagging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanTagging' }})
    

@dataclass
class UpdateNetworkGroupPolicyRequest:
    path_params: UpdateNetworkGroupPolicyPathParams = field(default=None)
    request: Optional[UpdateNetworkGroupPolicyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkGroupPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_group_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
