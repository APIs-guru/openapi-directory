from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import installationinfo
from . import ffmpeglocation_enum
from . import architecture_enum


@dataclass_json
@dataclass
class SystemInfo:
    cache_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CachePath' }})
    can_launch_web_browser: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanLaunchWebBrowser' }})
    can_self_restart: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanSelfRestart' }})
    completed_installations: Optional[List[installationinfo.InstallationInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedInstallations' }})
    encoder_location: Optional[ffmpeglocation_enum.FFmpegLocationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncoderLocation' }})
    has_pending_restart: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasPendingRestart' }})
    has_update_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasUpdateAvailable' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    internal_metadata_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InternalMetadataPath' }})
    is_shutting_down: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsShuttingDown' }})
    items_by_name_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemsByNamePath' }})
    local_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalAddress' }})
    log_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogPath' }})
    operating_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    operating_system_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystemDisplayName' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageName' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    program_data_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgramDataPath' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    startup_wizard_completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartupWizardCompleted' }})
    supports_library_monitor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsLibraryMonitor' }})
    system_architecture: Optional[architecture_enum.ArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SystemArchitecture' }})
    transcoding_temp_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscodingTempPath' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    web_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebPath' }})
    web_socket_port_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebSocketPortNumber' }})
    
