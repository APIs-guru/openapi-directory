from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateGitLabConnectedRepositoryRequestInput:
    r"""CreateGitLabConnectedRepositoryRequestInput
    Request to connect a repository from a connected GitLab host.
    """
    
    gitlab_connected_repository: Optional[GitLabConnectedRepositoryInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlabConnectedRepository') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
