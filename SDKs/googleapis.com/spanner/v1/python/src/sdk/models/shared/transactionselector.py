from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import transactionoptions
from . import transactionoptions


@dataclass_json
@dataclass
class TransactionSelector:
    begin: Optional[transactionoptions.TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'begin' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    single_use: Optional[transactionoptions.TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleUse' }})
    
