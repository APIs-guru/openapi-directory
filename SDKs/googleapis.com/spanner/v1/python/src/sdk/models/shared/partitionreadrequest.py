from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PartitionReadRequest:
    r"""PartitionReadRequest
    The request for PartitionRead
    """
    
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    key_set: Optional[KeySet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keySet') }})
    partition_options: Optional[PartitionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionOptions') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    transaction: Optional[TransactionSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
