from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum(str, Enum):
    NETWORK_CONNECTION_STATE_UNSPECIFIED = "NETWORK_CONNECTION_STATE_UNSPECIFIED"
    ONLINE = "ONLINE"
    CONNECTED = "CONNECTED"
    PORTAL = "PORTAL"
    CONNECTING = "CONNECTING"
    NOT_CONNECTED = "NOT_CONNECTED"

class GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum(str, Enum):
    NETWORK_TYPE_UNSPECIFIED = "NETWORK_TYPE_UNSPECIFIED"
    CELLULAR = "CELLULAR"
    ETHERNET = "ETHERNET"
    TETHER = "TETHER"
    VPN = "VPN"
    WIFI = "WIFI"


@dataclass_json
@dataclass
class GoogleChromeManagementV1NetworkStatusReport:
    connection_state: Optional[GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionState' }})
    connection_type: Optional[GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionType' }})
    encryption_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionOn' }})
    gateway_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayIpAddress' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guid' }})
    lan_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lanIpAddress' }})
    receiving_bit_rate_mbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receivingBitRateMbps' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    sample_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleFrequency' }})
    signal_strength_dbm: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signalStrengthDbm' }})
    transmission_bit_rate_mbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transmissionBitRateMbps' }})
    transmission_power_dbm: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transmissionPowerDbm' }})
    wifi_link_quality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiLinkQuality' }})
    wifi_power_management_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiPowerManagementEnabled' }})
    
