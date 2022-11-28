from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserManagedStatus:
    r"""UserManagedStatus
    The replication status of a SecretVersion using user-managed replication. Only populated if the parent Secret has a user-managed replication policy.
    """
    
    replicas: Optional[List[ReplicaStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicas') }})
    
