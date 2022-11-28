from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListenResponse:
    r"""ListenResponse
    The response for Firestore.Listen.
    """
    
    document_change: Optional[DocumentChange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentChange') }})
    document_delete: Optional[DocumentDelete] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentDelete') }})
    document_remove: Optional[DocumentRemove] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentRemove') }})
    filter: Optional[ExistenceFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    target_change: Optional[TargetChange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetChange') }})
    
