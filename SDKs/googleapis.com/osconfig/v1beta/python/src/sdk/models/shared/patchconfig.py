from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import aptsettings
from . import execstep
from . import execstep
from . import windowsupdatesettings
from . import yumsettings
from . import zyppersettings

class PatchConfigRebootConfigEnum(str, Enum):
    REBOOT_CONFIG_UNSPECIFIED = "REBOOT_CONFIG_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"


@dataclass_json
@dataclass
class PatchConfig:
    apt: Optional[aptsettings.AptSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apt' }})
    goo: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goo' }})
    mig_instances_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'migInstancesAllowed' }})
    post_step: Optional[execstep.ExecStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postStep' }})
    pre_step: Optional[execstep.ExecStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preStep' }})
    reboot_config: Optional[PatchConfigRebootConfigEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rebootConfig' }})
    windows_update: Optional[windowsupdatesettings.WindowsUpdateSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowsUpdate' }})
    yum: Optional[yumsettings.YumSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yum' }})
    zypper: Optional[zyppersettings.ZypperSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zypper' }})
    
