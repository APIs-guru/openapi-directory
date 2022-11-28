from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Resource:
    r"""Resource
    Information related to the Google Cloud resource that is associated with this finding.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    folders: Optional[List[Folder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folders') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentDisplayName') }})
    parent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentName') }})
    project_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectDisplayName') }})
    project_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
