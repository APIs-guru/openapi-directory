from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VersionKindEnum(str, Enum):
    NORMAL = "NORMAL"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"


@dataclass_json
@dataclass
class Version:
    r"""Version
    Version contains structured information about the version of the package. For a discussion of this in Debian/Ubuntu: http://serverfault.com/questions/604541/debian-packages-version-convention For a discussion of this in Redhat/Fedora/Centos: http://blog.jasonantman.com/2014/07/how-yum-and-rpm-compare-versions/
    """
    
    epoch: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epoch') }})
    inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inclusive') }})
    kind: Optional[VersionKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
