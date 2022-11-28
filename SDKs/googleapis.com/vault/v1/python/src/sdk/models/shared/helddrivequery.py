from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HeldDriveQuery:
    r"""HeldDriveQuery
    Options for Drive holds.
    """
    
    include_shared_drive_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeSharedDriveFiles') }})
    include_team_drive_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeTeamDriveFiles') }})
    
