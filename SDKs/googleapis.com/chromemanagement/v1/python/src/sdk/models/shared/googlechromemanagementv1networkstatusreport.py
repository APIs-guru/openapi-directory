from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""GoogleChromeManagementV1NetworkStatusReport
    State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes
    """
    
    connection_state: Optional[GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionState') }})
    connection_type: Optional[GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionType') }})
    encryption_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionOn') }})
    gateway_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayIpAddress') }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guid') }})
    lan_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lanIpAddress') }})
    receiving_bit_rate_mbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receivingBitRateMbps') }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    sample_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleFrequency') }})
    signal_strength_dbm: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signalStrengthDbm') }})
    transmission_bit_rate_mbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmissionBitRateMbps') }})
    transmission_power_dbm: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmissionPowerDbm') }})
    wifi_link_quality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiLinkQuality') }})
    wifi_power_management_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiPowerManagementEnabled') }})
    
