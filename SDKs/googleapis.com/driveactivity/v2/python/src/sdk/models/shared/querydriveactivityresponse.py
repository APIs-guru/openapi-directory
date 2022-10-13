from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import driveactivity


@dataclass_json
@dataclass
class QueryDriveActivityResponse:
    activities: Optional[List[driveactivity.DriveActivity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activities' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
