from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NameAndKindKindEnum(str, Enum):
    INVALID = "INVALID"
    SUM = "SUM"
    MAX = "MAX"
    MIN = "MIN"
    MEAN = "MEAN"
    OR = "OR"
    AND = "AND"
    SET = "SET"
    DISTRIBUTION = "DISTRIBUTION"
    LATEST_VALUE = "LATEST_VALUE"


@dataclass_json
@dataclass
class NameAndKind:
    r"""NameAndKind
    Basic metadata about a counter.
    """
    
    kind: Optional[NameAndKindKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
