from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum(str, Enum):
    WAN1 = "wan1"
    WAN2 = "wan2"

class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum(str, Enum):
    POOR_PERFORMANCE = "poorPerformance"
    UPLINK_DOWN = "uplinkDown"

class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum(str, Enum):
    VO_IP = "VoIP"

class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum(str, Enum):
    BUILTIN = "builtin"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass:
    r"""UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass
    Performance class setting for this uplink preference rule
    """
    
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    builtin_performance_class_name: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtinPerformanceClassName') }})
    custom_performance_class_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPerformanceClassId') }})
    
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum(str, Enum):
    WAN1 = "wan1"
    WAN2 = "wan2"
    BEST_FOR_VO_IP = "bestForVoIP"
    LOAD_BALANCING = "loadBalancing"
    DEFAULT_UPLINK = "defaultUplink"

class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum(str, Enum):
    APPLICATION_CATEGORY = "applicationCategory"
    APPLICATION = "application"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination:
    r"""UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination
    Destination of this custom type traffic filter
    """
    
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidr') }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fqdn') }})
    host: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource:
    r"""UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource
    Source of this custom type traffic filter
    """
    
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidr') }})
    host: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue:
    r"""UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue
    Value object of this traffic filter
    """
    
    destination: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    protocol: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    source: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters:
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences:
    preferred_uplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredUplink') }})
    traffic_filters: List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficFilters') }})
    fail_over_criterion: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failOverCriterion') }})
    performance_class: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceClass') }})
    
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum(str, Enum):
    WAN1 = "wan1"
    WAN2 = "wan2"

class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum(str, Enum):
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination:
    r"""UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination
    Destination of this custom type traffic filter
    """
    
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidr') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource:
    r"""UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource
    Source of this custom type traffic filter
    """
    
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidr') }})
    host: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue:
    r"""UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue
    Value object of this traffic filter
    """
    
    destination: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    source: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    protocol: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters:
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences:
    preferred_uplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredUplink') }})
    traffic_filters: List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficFilters') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody:
    active_active_auto_vpn_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeActiveAutoVpnEnabled') }})
    default_uplink: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultUplink') }})
    load_balancing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancingEnabled') }})
    vpn_traffic_uplink_preferences: Optional[List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpnTrafficUplinkPreferences') }})
    wan_traffic_uplink_preferences: Optional[List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wanTrafficUplinkPreferences') }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest:
    path_params: UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams = field()
    request: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_traffic_shaping_uplink_selection_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
