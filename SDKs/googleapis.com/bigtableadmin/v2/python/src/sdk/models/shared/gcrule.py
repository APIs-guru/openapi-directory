from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GcRule:
    r"""GcRule
    Rule for determining which cells to delete during garbage collection.
    """
    
    intersection: Optional[Intersection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intersection') }})
    max_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAge') }})
    max_num_versions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumVersions') }})
    union: Optional[Union] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('union') }})
    
