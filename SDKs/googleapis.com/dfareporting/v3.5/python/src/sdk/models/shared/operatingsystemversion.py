from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OperatingSystemVersion:
    r"""OperatingSystemVersion
    Contains information about a particular version of an operating system that can be targeted by ads.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    major_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minorVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operating_system: Optional[OperatingSystem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystem') }})
    
