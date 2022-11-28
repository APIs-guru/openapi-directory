from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClusterResourceRestoreScope:
    r"""ClusterResourceRestoreScope
    Identifies the cluster-scoped resources to restore from the Backup.
    """
    
    selected_group_kinds: Optional[List[GroupKind]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedGroupKinds') }})
    
