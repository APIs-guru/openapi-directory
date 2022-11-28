from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromeManagementV1TelemetryDevice:
    r"""GoogleChromeManagementV1TelemetryDevice
    Telemetry data collected from a managed device.
    """
    
    audio_status_report: Optional[List[GoogleChromeManagementV1AudioStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioStatusReport') }})
    battery_info: Optional[List[GoogleChromeManagementV1BatteryInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryInfo') }})
    battery_status_report: Optional[List[GoogleChromeManagementV1BatteryStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryStatusReport') }})
    boot_performance_report: Optional[List[GoogleChromeManagementV1BootPerformanceReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootPerformanceReport') }})
    cpu_info: Optional[List[GoogleChromeManagementV1CPUInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuInfo') }})
    cpu_status_report: Optional[List[GoogleChromeManagementV1CPUStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuStatusReport') }})
    customer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    graphics_info: Optional[GoogleChromeManagementV1GraphicsInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphicsInfo') }})
    graphics_status_report: Optional[List[GoogleChromeManagementV1GraphicsStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphicsStatusReport') }})
    memory_info: Optional[GoogleChromeManagementV1MemoryInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryInfo') }})
    memory_status_report: Optional[List[GoogleChromeManagementV1MemoryStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryStatusReport') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_diagnostics_report: Optional[List[GoogleChromeManagementV1NetworkDiagnosticsReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkDiagnosticsReport') }})
    network_info: Optional[GoogleChromeManagementV1NetworkInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInfo') }})
    network_status_report: Optional[List[GoogleChromeManagementV1NetworkStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkStatusReport') }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitId') }})
    os_update_status: Optional[List[GoogleChromeManagementV1OsUpdateStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osUpdateStatus') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    storage_info: Optional[GoogleChromeManagementV1StorageInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageInfo') }})
    storage_status_report: Optional[List[GoogleChromeManagementV1StorageStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageStatusReport') }})
    thunderbolt_info: Optional[List[GoogleChromeManagementV1ThunderboltInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thunderboltInfo') }})
    
