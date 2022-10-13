from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import requestoptions
from . import statement
from . import transactionselector


@dataclass_json
@dataclass
class ExecuteBatchDmlRequest:
    request_options: Optional[requestoptions.RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestOptions' }})
    seqno: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seqno' }})
    statements: Optional[List[statement.Statement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statements' }})
    transaction: Optional[transactionselector.TransactionSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
