from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecuteBatchDmlRequest:
    r"""ExecuteBatchDmlRequest
    The request for ExecuteBatchDml.
    """
    
    request_options: Optional[RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestOptions') }})
    seqno: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seqno') }})
    statements: Optional[List[Statement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statements') }})
    transaction: Optional[TransactionSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
