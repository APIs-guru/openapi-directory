from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import transactionoptions
from . import structuredquery


@dataclass_json
@dataclass
class RunQueryRequest:
    new_transaction: Optional[transactionoptions.TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newTransaction' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    structured_query: Optional[structuredquery.StructuredQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structuredQuery' }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
