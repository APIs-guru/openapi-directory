from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OsPolicyResourcePackageResourceDesiredStateEnum(str, Enum):
    DESIRED_STATE_UNSPECIFIED = "DESIRED_STATE_UNSPECIFIED"
    INSTALLED = "INSTALLED"
    REMOVED = "REMOVED"


@dataclass_json
@dataclass
class OsPolicyResourcePackageResource:
    r"""OsPolicyResourcePackageResource
    A resource that manages a system package.
    """
    
    apt: Optional[OsPolicyResourcePackageResourceApt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    deb: Optional[OsPolicyResourcePackageResourceDeb] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deb') }})
    desired_state: Optional[OsPolicyResourcePackageResourceDesiredStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredState') }})
    googet: Optional[OsPolicyResourcePackageResourceGooGet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googet') }})
    msi: Optional[OsPolicyResourcePackageResourceMsi] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msi') }})
    rpm: Optional[OsPolicyResourcePackageResourceRpm] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rpm') }})
    yum: Optional[OsPolicyResourcePackageResourceYum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yum') }})
    zypper: Optional[OsPolicyResourcePackageResourceZypper] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypper') }})
    
