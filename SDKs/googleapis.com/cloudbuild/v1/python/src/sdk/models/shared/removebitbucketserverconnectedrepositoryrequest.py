from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemoveBitbucketServerConnectedRepositoryRequestInput:
    r"""RemoveBitbucketServerConnectedRepositoryRequestInput
    RPC request object accepted by RemoveBitbucketServerConnectedRepository RPC method.
    """
    
    connected_repository: Optional[BitbucketServerRepositoryIDInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectedRepository') }})
    
