from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CommitRequestModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    TRANSACTIONAL = "TRANSACTIONAL"
    NON_TRANSACTIONAL = "NON_TRANSACTIONAL"


@dataclass_json
@dataclass
class CommitRequest:
    r"""CommitRequest
    The request for Datastore.Commit.
    """
    
    mode: Optional[CommitRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    mutations: Optional[List[Mutation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutations') }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
