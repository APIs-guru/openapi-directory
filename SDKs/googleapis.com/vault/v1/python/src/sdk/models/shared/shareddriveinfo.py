from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SharedDriveInfo:
    r"""SharedDriveInfo
    The shared drives to search
    """
    
    shared_drive_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedDriveIds') }})
    
