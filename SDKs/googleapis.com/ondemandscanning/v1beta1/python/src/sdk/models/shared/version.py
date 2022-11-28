from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VersionKindEnum(str, Enum):
    VERSION_KIND_UNSPECIFIED = "VERSION_KIND_UNSPECIFIED"
    NORMAL = "NORMAL"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"


@dataclass_json
@dataclass
class Version:
    r"""Version
    Version contains structured information about the version of a package.
    """
    
    epoch: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epoch') }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inclusive') }})
    kind: Optional[VersionKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
