from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProjectInfo:
    r"""ProjectInfo
    A reference to a Google Cloud Platform (GCP) `Project`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    
