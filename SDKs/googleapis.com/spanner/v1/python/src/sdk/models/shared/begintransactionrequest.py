from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import transactionoptions
from . import requestoptions


@dataclass_json
@dataclass
class BeginTransactionRequest:
    options: Optional[transactionoptions.TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    request_options: Optional[requestoptions.RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestOptions' }})
    
