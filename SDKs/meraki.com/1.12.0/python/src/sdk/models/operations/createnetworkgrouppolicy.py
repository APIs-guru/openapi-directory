from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkGroupPolicyPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits:
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitDown' }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitUp' }})
    
class CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyBandwidth:
    bandwidth_limits: Optional[CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthLimits' }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
class CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum(str, Enum):
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
class CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    services: List[CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    vlan_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    
class CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyBonjourForwarding:
    rules: Optional[List[CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
class CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns:
    patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patterns' }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories:
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns:
    patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patterns' }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyContentFiltering:
    allowed_url_patterns: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedUrlPatterns' }})
    blocked_url_categories: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockedUrlCategories' }})
    blocked_url_patterns: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockedUrlPatterns' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    dest_cidr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destCidr' }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destPort' }})
    policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    protocol: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum(str, Enum):
    DENY = "deny"

class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"


@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules:
    policy: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    type: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"

class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"
    LOCAL_NET = "localNet"


@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions:
    type: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits:
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitDown' }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitUp' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits:
    bandwidth_limits: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthLimits' }})
    settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules:
    definitions: List[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definitions' }})
    dscp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dscpTagValue' }})
    pcp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pcpTagValue' }})
    per_client_bandwidth_limits: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perClientBandwidthLimits' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping:
    l3_firewall_rules: Optional[List[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l3FirewallRules' }})
    l7_firewall_rules: Optional[List[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l7FirewallRules' }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    traffic_shaping_rules: Optional[List[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficShapingRules' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingFriday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingMonday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingSaturday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingSunday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingThursday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingTuesday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingWednesday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyScheduling:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    friday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingFriday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friday' }})
    monday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingMonday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monday' }})
    saturday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingSaturday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saturday' }})
    sunday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingSunday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sunday' }})
    thursday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingThursday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thursday' }})
    tuesday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingTuesday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tuesday' }})
    wednesday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingWednesday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wednesday' }})
    
class CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    BYPASS = "bypass"

class CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBodyVlanTagging:
    settings: Optional[CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    vlan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    

@dataclass_json
@dataclass
class CreateNetworkGroupPolicyRequestBody:
    bandwidth: Optional[CreateNetworkGroupPolicyRequestBodyBandwidth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth' }})
    bonjour_forwarding: Optional[CreateNetworkGroupPolicyRequestBodyBonjourForwarding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bonjourForwarding' }})
    content_filtering: Optional[CreateNetworkGroupPolicyRequestBodyContentFiltering] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentFiltering' }})
    firewall_and_traffic_shaping: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewallAndTrafficShaping' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    scheduling: Optional[CreateNetworkGroupPolicyRequestBodyScheduling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduling' }})
    splash_auth_settings: Optional[CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splashAuthSettings' }})
    vlan_tagging: Optional[CreateNetworkGroupPolicyRequestBodyVlanTagging] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanTagging' }})
    

@dataclass
class CreateNetworkGroupPolicyRequest:
    path_params: CreateNetworkGroupPolicyPathParams = field(default=None)
    request: CreateNetworkGroupPolicyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkGroupPolicyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_group_policy_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
