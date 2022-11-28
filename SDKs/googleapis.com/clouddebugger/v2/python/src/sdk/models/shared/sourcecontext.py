from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceContext:
    r"""SourceContext
    A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
    """
    
    cloud_repo: Optional[CloudRepoSourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRepo') }})
    cloud_workspace: Optional[CloudWorkspaceSourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWorkspace') }})
    gerrit: Optional[GerritSourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gerrit') }})
    git: Optional[GitSourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    
