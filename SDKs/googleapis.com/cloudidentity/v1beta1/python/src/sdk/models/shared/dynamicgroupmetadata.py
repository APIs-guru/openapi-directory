from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DynamicGroupMetadata:
    r"""DynamicGroupMetadata
    Dynamic group metadata like queries and status.
    """
    
    queries: Optional[List[DynamicGroupQuery]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queries') }})
    status: Optional[DynamicGroupStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
