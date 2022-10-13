from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentmask
from . import transactionoptions


@dataclass_json
@dataclass
class BatchGetDocumentsRequest:
    documents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    mask: Optional[documentmask.DocumentMask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mask' }})
    new_transaction: Optional[transactionoptions.TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newTransaction' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
