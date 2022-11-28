from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomListGroup:
    r"""CustomListGroup
    Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.
    """
    
    settings: Optional[List[CustomListTargetingSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
