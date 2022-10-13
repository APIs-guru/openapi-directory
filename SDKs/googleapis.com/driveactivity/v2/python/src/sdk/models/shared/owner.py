from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import domain
from . import drivereference
from . import teamdrivereference
from . import user


@dataclass_json
@dataclass
class Owner:
    domain: Optional[domain.Domain] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    drive: Optional[drivereference.DriveReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drive' }})
    team_drive: Optional[teamdrivereference.TeamDriveReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDrive' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
