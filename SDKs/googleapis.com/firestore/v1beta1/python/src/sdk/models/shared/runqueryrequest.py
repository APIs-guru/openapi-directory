from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunQueryRequest:
    r"""RunQueryRequest
    The request for Firestore.RunQuery.
    """
    
    new_transaction: Optional[TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newTransaction') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    structured_query: Optional[StructuredQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredQuery') }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
