from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudWorkspaceID:
    r"""CloudWorkspaceID
    A CloudWorkspaceId is a unique identifier for a cloud workspace. A cloud workspace is a place associated with a repo where modified files can be stored before they are committed.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    repo_id: Optional[RepoID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoId') }})
    
