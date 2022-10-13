from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HeldDriveQuery:
    include_shared_drive_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeSharedDriveFiles' }})
    include_team_drive_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeTeamDriveFiles' }})
    
