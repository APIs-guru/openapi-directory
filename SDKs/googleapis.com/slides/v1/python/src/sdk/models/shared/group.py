from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Group:
    r"""Group
    A PageElement kind representing a joined collection of PageElements.
    """
    
    children: Optional[List[PageElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('children') }})
    
