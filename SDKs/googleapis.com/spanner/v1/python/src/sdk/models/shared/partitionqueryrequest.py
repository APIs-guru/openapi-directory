from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import type
from . import partitionoptions
from . import transactionselector


@dataclass_json
@dataclass
class PartitionQueryRequest:
    param_types: Optional[dict[str, type.Type]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paramTypes' }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    partition_options: Optional[partitionoptions.PartitionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionOptions' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    transaction: Optional[transactionselector.TransactionSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
