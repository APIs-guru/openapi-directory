from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PatchConfigRebootConfigEnum(str, Enum):
    REBOOT_CONFIG_UNSPECIFIED = "REBOOT_CONFIG_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"


@dataclass_json
@dataclass
class PatchConfig:
    r"""PatchConfig
    Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
    """
    
    apt: Optional[AptSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    goo: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goo') }})
    mig_instances_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migInstancesAllowed') }})
    post_step: Optional[ExecStep] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStep') }})
    pre_step: Optional[ExecStep] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preStep') }})
    reboot_config: Optional[PatchConfigRebootConfigEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebootConfig') }})
    windows_update: Optional[WindowsUpdateSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsUpdate') }})
    yum: Optional[YumSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yum') }})
    zypper: Optional[ZypperSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypper') }})
    
