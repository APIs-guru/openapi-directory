from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PosixGroup:
    r"""PosixGroup
    POSIX Group definition to represent a group in a POSIX compliant system.
    """
    
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemId') }})
    
