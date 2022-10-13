from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpPathParams:
    interface_id: str = field(default=None, metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum(str, Enum):
    THIRTY_MINUTES = "30 minutes"
    ONE_HOUR = "1 hour"
    FOUR_HOURS = "4 hours"
    TWELVE_HOURS = "12 hours"
    ONE_DAY = "1 day"
    ONE_WEEK = "1 week"

class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum(str, Enum):
    DHCP_DISABLED = "dhcpDisabled"
    DHCP_RELAY = "dhcpRelay"
    DHCP_SERVER = "dhcpServer"

class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum(str, Enum):
    TEXT = "text"
    IP = "ip"
    INTEGER = "integer"
    HEX = "hex"


@dataclass_json
@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    type: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum(str, Enum):
    GOOGLE_PUBLIC_DNS = "googlePublicDns"
    OPEN_DNS = "openDns"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments:
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    mac: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    end: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

@dataclass_json
@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody:
    boot_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootFileName' }})
    boot_next_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootNextServer' }})
    boot_options_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootOptionsEnabled' }})
    dhcp_lease_time: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhcpLeaseTime' }})
    dhcp_mode: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhcpMode' }})
    dhcp_options: Optional[List[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhcpOptions' }})
    dhcp_relay_server_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dhcpRelayServerIps' }})
    dns_custom_nameservers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsCustomNameservers' }})
    dns_nameservers_option: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsNameserversOption' }})
    fixed_ip_assignments: Optional[List[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedIpAssignments' }})
    reserved_ip_ranges: Optional[List[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedIpRanges' }})
    

@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequest:
    path_params: UpdateDeviceSwitchRoutingInterfaceDhcpPathParams = field(default=None)
    request: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_switch_routing_interface_dhcp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
