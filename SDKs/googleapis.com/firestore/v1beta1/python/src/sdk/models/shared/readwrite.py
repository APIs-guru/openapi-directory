from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReadWrite:
    r"""ReadWrite
    Options for a transaction that can be used to read and write documents.
    """
    
    retry_transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryTransaction') }})
    
