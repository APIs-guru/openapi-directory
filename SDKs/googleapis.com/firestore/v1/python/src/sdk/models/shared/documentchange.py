from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentChange:
    r"""DocumentChange
    A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected.
    """
    
    document: Optional[Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    removed_target_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedTargetIds') }})
    target_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetIds') }})
    
