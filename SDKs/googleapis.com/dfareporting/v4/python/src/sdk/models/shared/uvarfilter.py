from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UvarFilterMatchEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    EXACT = "EXACT"
    CONTAINS = "CONTAINS"


@dataclass_json
@dataclass
class UvarFilter:
    r"""UvarFilter
    Defines the filtering on a single uvar.
    """
    
    complement: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complement') }})
    index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    match: Optional[UvarFilterMatchEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
