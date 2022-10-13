from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import containerimage

class RuntimeSoftwareConfigPostStartupScriptBehaviorEnum(str, Enum):
    POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED = "POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED"
    RUN_EVERY_START = "RUN_EVERY_START"
    DOWNLOAD_AND_RUN_EVERY_START = "DOWNLOAD_AND_RUN_EVERY_START"


@dataclass_json
@dataclass
class RuntimeSoftwareConfig:
    custom_gpu_driver_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customGpuDriverPath' }})
    disable_terminal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableTerminal' }})
    enable_health_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableHealthMonitoring' }})
    idle_shutdown: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleShutdown' }})
    idle_shutdown_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleShutdownTimeout' }})
    install_gpu_driver: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installGpuDriver' }})
    kernels: Optional[List[containerimage.ContainerImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernels' }})
    notebook_upgrade_schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notebookUpgradeSchedule' }})
    post_startup_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postStartupScript' }})
    post_startup_script_behavior: Optional[RuntimeSoftwareConfigPostStartupScriptBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postStartupScriptBehavior' }})
    upgradeable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeable' }})
    
