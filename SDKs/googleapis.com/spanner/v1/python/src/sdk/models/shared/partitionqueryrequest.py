from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PartitionQueryRequest:
    r"""PartitionQueryRequest
    The request for PartitionQuery
    """
    
    param_types: Optional[dict[str, Type]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paramTypes') }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    partition_options: Optional[PartitionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionOptions') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    transaction: Optional[TransactionSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
