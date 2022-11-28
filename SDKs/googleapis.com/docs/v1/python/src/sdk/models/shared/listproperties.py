from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListProperties:
    r"""ListProperties
    The properties of a list that describe the look and feel of bullets belonging to paragraphs associated with a list.
    """
    
    nesting_levels: Optional[List[NestingLevel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nestingLevels') }})
    
