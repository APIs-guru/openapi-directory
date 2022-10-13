from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyset
from . import requestoptions
from . import transactionselector


@dataclass_json
@dataclass
class ReadRequest:
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    key_set: Optional[keyset.KeySet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keySet' }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    partition_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionToken' }})
    request_options: Optional[requestoptions.RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestOptions' }})
    resume_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resumeToken' }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    transaction: Optional[transactionselector.TransactionSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
