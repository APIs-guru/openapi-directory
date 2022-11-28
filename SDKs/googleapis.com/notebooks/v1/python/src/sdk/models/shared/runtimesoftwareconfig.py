from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RuntimeSoftwareConfigPostStartupScriptBehaviorEnum(str, Enum):
    POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED = "POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED"
    RUN_EVERY_START = "RUN_EVERY_START"
    DOWNLOAD_AND_RUN_EVERY_START = "DOWNLOAD_AND_RUN_EVERY_START"


@dataclass_json
@dataclass
class RuntimeSoftwareConfig:
    r"""RuntimeSoftwareConfig
    Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
    """
    
    custom_gpu_driver_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customGpuDriverPath') }})
    disable_terminal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTerminal') }})
    enable_health_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableHealthMonitoring') }})
    idle_shutdown: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleShutdown') }})
    idle_shutdown_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleShutdownTimeout') }})
    install_gpu_driver: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installGpuDriver') }})
    kernels: Optional[List[ContainerImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernels') }})
    notebook_upgrade_schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notebookUpgradeSchedule') }})
    post_startup_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStartupScript') }})
    post_startup_script_behavior: Optional[RuntimeSoftwareConfigPostStartupScriptBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStartupScriptBehavior') }})
    upgradeable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeable') }})
    

@dataclass_json
@dataclass
class RuntimeSoftwareConfigInput:
    r"""RuntimeSoftwareConfigInput
    Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
    """
    
    custom_gpu_driver_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customGpuDriverPath') }})
    disable_terminal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTerminal') }})
    enable_health_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableHealthMonitoring') }})
    idle_shutdown: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleShutdown') }})
    idle_shutdown_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleShutdownTimeout') }})
    install_gpu_driver: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installGpuDriver') }})
    kernels: Optional[List[ContainerImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernels') }})
    notebook_upgrade_schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notebookUpgradeSchedule') }})
    post_startup_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStartupScript') }})
    post_startup_script_behavior: Optional[RuntimeSoftwareConfigPostStartupScriptBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStartupScriptBehavior') }})
    
