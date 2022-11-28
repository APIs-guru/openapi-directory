from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class List:
    r"""List
    A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID.
    """
    
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listId') }})
    nesting_level: Optional[dict[str, NestingLevel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nestingLevel') }})
    
