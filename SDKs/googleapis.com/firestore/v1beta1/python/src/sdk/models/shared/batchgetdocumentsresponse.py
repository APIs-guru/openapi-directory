from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetDocumentsResponse:
    r"""BatchGetDocumentsResponse
    The streamed response for Firestore.BatchGetDocuments.
    """
    
    found: Optional[Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('found') }})
    missing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missing') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
