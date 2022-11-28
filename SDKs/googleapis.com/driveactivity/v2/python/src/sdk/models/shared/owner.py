from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Owner:
    r"""Owner
    Information about the owner of a Drive item.
    """
    
    domain: Optional[Domain] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    drive: Optional[DriveReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive') }})
    team_drive: Optional[TeamDriveReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDrive') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
