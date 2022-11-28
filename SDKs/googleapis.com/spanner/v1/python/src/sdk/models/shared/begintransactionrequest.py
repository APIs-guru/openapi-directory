from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BeginTransactionRequest:
    r"""BeginTransactionRequest
    The request for BeginTransaction.
    """
    
    options: Optional[TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    request_options: Optional[RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestOptions') }})
    
