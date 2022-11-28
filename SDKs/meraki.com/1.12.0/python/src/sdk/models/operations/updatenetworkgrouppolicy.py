from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkGroupPolicyPathParams:
    group_policy_id: str = field(metadata={'path_param': { 'field_name': 'groupPolicyId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits:
    r"""UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits
    The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
    """
    
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    
class UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyBandwidth:
    r"""UpdateNetworkGroupPolicyRequestBodyBandwidth
        The bandwidth settings for clients bound to your group policy.
    
    """
    
    bandwidth_limits: Optional[UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
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
    services: List[UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    vlan_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyBonjourForwarding:
    r"""UpdateNetworkGroupPolicyRequestBodyBonjourForwarding
    The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
    """
    
    rules: Optional[List[UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns:
    r"""UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns
    Settings for allowed URL patterns
    """
    
    patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patterns') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories:
    r"""UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories
    Settings for blocked URL categories
    """
    
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns:
    r"""UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns
    Settings for blocked URL patterns
    """
    
    patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patterns') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFiltering:
    r"""UpdateNetworkGroupPolicyRequestBodyContentFiltering
    The content filtering settings for your group policy
    """
    
    allowed_url_patterns: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedUrlPatterns') }})
    blocked_url_categories: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedUrlCategories') }})
    blocked_url_patterns: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedUrlPatterns') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules:
    dest_cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    
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
    policy: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    type: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
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
    type: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits:
    r"""UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits
    The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
    """
    
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits:
    r"""UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits
        An object describing the bandwidth settings for your rule.
    
    """
    
    bandwidth_limits: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules:
    definitions: List[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    dscp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscpTagValue') }})
    pcp_tag_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pcpTagValue') }})
    per_client_bandwidth_limits: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perClientBandwidthLimits') }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping:
    r"""UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
        The firewall and traffic shaping rules and settings for your policy.
    
    """
    
    l3_firewall_rules: Optional[List[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('l3FirewallRules') }})
    l7_firewall_rules: Optional[List[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('l7FirewallRules') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    traffic_shaping_rules: Optional[List[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficShapingRules') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingFriday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingFriday
    The schedule object for Friday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingMonday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingMonday
    The schedule object for Monday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingSaturday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingSaturday
    The schedule object for Saturday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingSunday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingSunday
    The schedule object for Sunday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingThursday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingThursday
    The schedule object for Thursday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingTuesday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingTuesday
    The schedule object for Tuesday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingWednesday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingWednesday
    The schedule object for Wednesday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBodyScheduling:
    r"""UpdateNetworkGroupPolicyRequestBodyScheduling
        The schedule for the group policy. Schedules are applied to days of the week.
    
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    friday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingFriday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friday') }})
    monday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingMonday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monday') }})
    saturday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingSaturday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturday') }})
    sunday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingSunday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sunday') }})
    thursday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingThursday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thursday') }})
    tuesday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingTuesday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tuesday') }})
    wednesday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingWednesday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wednesday') }})
    
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
    r"""UpdateNetworkGroupPolicyRequestBodyVlanTagging
    The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
    """
    
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    vlan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    

@dataclass_json
@dataclass
class UpdateNetworkGroupPolicyRequestBody:
    bandwidth: Optional[UpdateNetworkGroupPolicyRequestBodyBandwidth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    bonjour_forwarding: Optional[UpdateNetworkGroupPolicyRequestBodyBonjourForwarding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bonjourForwarding') }})
    content_filtering: Optional[UpdateNetworkGroupPolicyRequestBodyContentFiltering] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentFiltering') }})
    firewall_and_traffic_shaping: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewallAndTrafficShaping') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    scheduling: Optional[UpdateNetworkGroupPolicyRequestBodyScheduling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduling') }})
    splash_auth_settings: Optional[UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splashAuthSettings') }})
    vlan_tagging: Optional[UpdateNetworkGroupPolicyRequestBodyVlanTagging] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanTagging') }})
    

@dataclass
class UpdateNetworkGroupPolicyRequest:
    path_params: UpdateNetworkGroupPolicyPathParams = field()
    request: Optional[UpdateNetworkGroupPolicyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkGroupPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_group_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
