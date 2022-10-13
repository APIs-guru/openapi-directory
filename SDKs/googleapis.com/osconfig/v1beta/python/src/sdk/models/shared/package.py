from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    desired_state: Optional[PackageDesiredStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredState' }})
    manager: Optional[PackageManagerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manager' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
