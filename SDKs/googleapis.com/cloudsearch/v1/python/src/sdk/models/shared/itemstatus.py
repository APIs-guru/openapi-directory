from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ItemStatusCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    ERROR = "ERROR"
    MODIFIED = "MODIFIED"
    NEW_ITEM = "NEW_ITEM"
    ACCEPTED = "ACCEPTED"


@dataclass_json
@dataclass
class ItemStatus:
    r"""ItemStatus
    This contains item's status and any errors.
    """
    
    code: Optional[ItemStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    processing_errors: Optional[List[ProcessingError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingErrors') }})
    repository_errors: Optional[List[RepositoryError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryErrors') }})
    
