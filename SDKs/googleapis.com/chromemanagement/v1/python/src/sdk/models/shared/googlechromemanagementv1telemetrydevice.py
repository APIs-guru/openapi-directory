from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1audiostatusreport
from . import googlechromemanagementv1batteryinfo
from . import googlechromemanagementv1batterystatusreport
from . import googlechromemanagementv1bootperformancereport
from . import googlechromemanagementv1cpuinfo
from . import googlechromemanagementv1cpustatusreport
from . import googlechromemanagementv1graphicsinfo
from . import googlechromemanagementv1graphicsstatusreport
from . import googlechromemanagementv1memoryinfo
from . import googlechromemanagementv1memorystatusreport
from . import googlechromemanagementv1networkdiagnosticsreport
from . import googlechromemanagementv1networkinfo
from . import googlechromemanagementv1networkstatusreport
from . import googlechromemanagementv1osupdatestatus
from . import googlechromemanagementv1storageinfo
from . import googlechromemanagementv1storagestatusreport
from . import googlechromemanagementv1thunderboltinfo


@dataclass_json
@dataclass
class GoogleChromeManagementV1TelemetryDevice:
    audio_status_report: Optional[List[googlechromemanagementv1audiostatusreport.GoogleChromeManagementV1AudioStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioStatusReport' }})
    battery_info: Optional[List[googlechromemanagementv1batteryinfo.GoogleChromeManagementV1BatteryInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batteryInfo' }})
    battery_status_report: Optional[List[googlechromemanagementv1batterystatusreport.GoogleChromeManagementV1BatteryStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batteryStatusReport' }})
    boot_performance_report: Optional[List[googlechromemanagementv1bootperformancereport.GoogleChromeManagementV1BootPerformanceReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootPerformanceReport' }})
    cpu_info: Optional[List[googlechromemanagementv1cpuinfo.GoogleChromeManagementV1CPUInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuInfo' }})
    cpu_status_report: Optional[List[googlechromemanagementv1cpustatusreport.GoogleChromeManagementV1CPUStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuStatusReport' }})
    customer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    graphics_info: Optional[googlechromemanagementv1graphicsinfo.GoogleChromeManagementV1GraphicsInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'graphicsInfo' }})
    graphics_status_report: Optional[List[googlechromemanagementv1graphicsstatusreport.GoogleChromeManagementV1GraphicsStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'graphicsStatusReport' }})
    memory_info: Optional[googlechromemanagementv1memoryinfo.GoogleChromeManagementV1MemoryInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryInfo' }})
    memory_status_report: Optional[List[googlechromemanagementv1memorystatusreport.GoogleChromeManagementV1MemoryStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryStatusReport' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_diagnostics_report: Optional[List[googlechromemanagementv1networkdiagnosticsreport.GoogleChromeManagementV1NetworkDiagnosticsReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkDiagnosticsReport' }})
    network_info: Optional[googlechromemanagementv1networkinfo.GoogleChromeManagementV1NetworkInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInfo' }})
    network_status_report: Optional[List[googlechromemanagementv1networkstatusreport.GoogleChromeManagementV1NetworkStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkStatusReport' }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgUnitId' }})
    os_update_status: Optional[List[googlechromemanagementv1osupdatestatus.GoogleChromeManagementV1OsUpdateStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osUpdateStatus' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    storage_info: Optional[googlechromemanagementv1storageinfo.GoogleChromeManagementV1StorageInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageInfo' }})
    storage_status_report: Optional[List[googlechromemanagementv1storagestatusreport.GoogleChromeManagementV1StorageStatusReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageStatusReport' }})
    thunderbolt_info: Optional[List[googlechromemanagementv1thunderboltinfo.GoogleChromeManagementV1ThunderboltInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thunderboltInfo' }})
    
