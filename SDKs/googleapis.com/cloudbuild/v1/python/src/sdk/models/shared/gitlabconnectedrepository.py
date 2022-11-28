from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GitLabConnectedRepositoryInput:
    r"""GitLabConnectedRepositoryInput
    GitLabConnectedRepository represents a GitLab connected repository request response.
    """
    
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    repo: Optional[GitLabRepositoryIDInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
