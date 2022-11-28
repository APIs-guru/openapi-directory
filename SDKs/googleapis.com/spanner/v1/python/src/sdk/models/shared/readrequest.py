from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReadRequest:
    r"""ReadRequest
    The request for Read and StreamingRead.
    """
    
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    key_set: Optional[KeySet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keySet') }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    partition_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionToken') }})
    request_options: Optional[RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestOptions') }})
    resume_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resumeToken') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    transaction: Optional[TransactionSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
