from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetDocumentsRequest:
    r"""BatchGetDocumentsRequest
    The request for Firestore.BatchGetDocuments.
    """
    
    documents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    mask: Optional[DocumentMask] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mask') }})
    new_transaction: Optional[TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newTransaction') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
