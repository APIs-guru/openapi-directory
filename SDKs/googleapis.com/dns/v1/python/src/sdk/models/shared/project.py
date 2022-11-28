from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Project:
    r"""Project
    A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. Next tag: 7.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    quota: Optional[Quota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    
