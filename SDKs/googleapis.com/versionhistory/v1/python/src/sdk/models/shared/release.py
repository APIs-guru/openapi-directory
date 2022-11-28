from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Release:
    r"""Release
    A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version.
    """
    
    fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fraction') }})
    fraction_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fractionGroup') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    serving: Optional[Interval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serving') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
