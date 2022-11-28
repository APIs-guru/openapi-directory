from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemoveGitLabConnectedRepositoryRequestInput:
    r"""RemoveGitLabConnectedRepositoryRequestInput
    RPC request object accepted by RemoveGitLabConnectedRepository RPC method.
    """
    
    connected_repository: Optional[GitLabRepositoryIDInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectedRepository') }})
    
