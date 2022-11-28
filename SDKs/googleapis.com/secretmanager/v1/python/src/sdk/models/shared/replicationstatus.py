from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicationStatus:
    r"""ReplicationStatus
    The replication status of a SecretVersion.
    """
    
    automatic: Optional[AutomaticStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatic') }})
    user_managed: Optional[UserManagedStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userManaged') }})
    
