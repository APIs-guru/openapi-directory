from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import teamdrive


@dataclass_json
@dataclass
class TeamDriveList:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    team_drives: Optional[List[teamdrive.TeamDrive]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDrives' }})
    
