from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AliasContextKindEnum(str, Enum):
    KIND_UNSPECIFIED = "KIND_UNSPECIFIED"
    FIXED = "FIXED"
    MOVABLE = "MOVABLE"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class AliasContext:
    r"""AliasContext
    An alias to a repo revision.
    """
    
    kind: Optional[AliasContextKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
