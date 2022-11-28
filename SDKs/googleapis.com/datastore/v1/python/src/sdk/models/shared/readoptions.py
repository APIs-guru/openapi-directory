from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReadOptionsReadConsistencyEnum(str, Enum):
    READ_CONSISTENCY_UNSPECIFIED = "READ_CONSISTENCY_UNSPECIFIED"
    STRONG = "STRONG"
    EVENTUAL = "EVENTUAL"


@dataclass_json
@dataclass
class ReadOptions:
    r"""ReadOptions
    The options shared by read requests.
    """
    
    read_consistency: Optional[ReadOptionsReadConsistencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readConsistency') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
