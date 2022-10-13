from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
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
    builtin_performance_class_name: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builtinPerformanceClassName' }})
    custom_performance_class_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPerformanceClassId' }})
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
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
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidr' }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fqdn' }})
    host: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource:
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidr' }})
    host: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue:
    destination: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    protocol: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters:
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences:
    fail_over_criterion: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failOverCriterion' }})
    performance_class: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performanceClass' }})
    preferred_uplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredUplink' }})
    traffic_filters: List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficFilters' }})
    
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum(str, Enum):
    WAN1 = "wan1"
    WAN2 = "wan2"

class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum(str, Enum):
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination:
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidr' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ANY = "any"


@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource:
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cidr' }})
    host: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue:
    destination: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    protocol: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters:
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences:
    preferred_uplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredUplink' }})
    traffic_filters: List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trafficFilters' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody:
    active_active_auto_vpn_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeActiveAutoVpnEnabled' }})
    default_uplink: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultUplink' }})
    load_balancing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancingEnabled' }})
    vpn_traffic_uplink_preferences: Optional[List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpnTrafficUplinkPreferences' }})
    wan_traffic_uplink_preferences: Optional[List[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wanTrafficUplinkPreferences' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest:
    path_params: UpdateNetworkApplianceTrafficShapingUplinkSelectionPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_traffic_shaping_uplink_selection_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
