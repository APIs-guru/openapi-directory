from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpPathParams:
    interface_id: str = field(metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
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
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    type: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum(str, Enum):
    GOOGLE_PUBLIC_DNS = "googlePublicDns"
    OPEN_DNS = "openDns"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments:
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    mac: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges:
    end: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    

@dataclass_json
@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody:
    boot_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootFileName') }})
    boot_next_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootNextServer') }})
    boot_options_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootOptionsEnabled') }})
    dhcp_lease_time: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpLeaseTime') }})
    dhcp_mode: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpMode') }})
    dhcp_options: Optional[List[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpOptions') }})
    dhcp_relay_server_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dhcpRelayServerIps') }})
    dns_custom_nameservers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsCustomNameservers') }})
    dns_nameservers_option: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDNSNameserversOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsNameserversOption') }})
    fixed_ip_assignments: Optional[List[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIPAssignments]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedIpAssignments') }})
    reserved_ip_ranges: Optional[List[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIPRanges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRanges') }})
    

@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpRequest:
    path_params: UpdateDeviceSwitchRoutingInterfaceDhcpPathParams = field()
    request: Optional[UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceSwitchRoutingInterfaceDhcpResponse:
    content_type: str = field()
    status_code: int = field()
    update_device_switch_routing_interface_dhcp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
