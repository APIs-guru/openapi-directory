from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PackageDesiredStateEnum(str, Enum):
    DESIRED_STATE_UNSPECIFIED = "DESIRED_STATE_UNSPECIFIED"
    INSTALLED = "INSTALLED"
    UPDATED = "UPDATED"
    REMOVED = "REMOVED"

class PackageManagerEnum(str, Enum):
    MANAGER_UNSPECIFIED = "MANAGER_UNSPECIFIED"
    ANY = "ANY"
    APT = "APT"
    YUM = "YUM"
    ZYPPER = "ZYPPER"
    GOO = "GOO"


@dataclass_json
@dataclass
class Package:
    r"""Package
    Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3`
    """
    
    desired_state: Optional[PackageDesiredStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredState') }})
    manager: Optional[PackageManagerEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manager') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
