from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserManaged:
    r"""UserManaged
    A replication policy that replicates the Secret payload into the locations specified in Secret.replication.user_managed.replicas
    """
    
    replicas: Optional[List[Replica]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicas') }})
    
