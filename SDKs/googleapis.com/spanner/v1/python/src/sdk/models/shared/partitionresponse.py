from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PartitionResponse:
    r"""PartitionResponse
    The response for PartitionQuery or PartitionRead
    """
    
    partitions: Optional[List[Partition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitions') }})
    transaction: Optional[Transaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
