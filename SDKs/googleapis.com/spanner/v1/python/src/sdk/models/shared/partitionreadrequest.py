from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyset
from . import partitionoptions
from . import transactionselector


@dataclass_json
@dataclass
class PartitionReadRequest:
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    key_set: Optional[keyset.KeySet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keySet' }})
    partition_options: Optional[partitionoptions.PartitionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionOptions' }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    transaction: Optional[transactionselector.TransactionSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
