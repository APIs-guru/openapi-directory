from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObjectDisplayOptions:
    r"""ObjectDisplayOptions
    The display options for an object.
    """
    
    metalines: Optional[List[Metaline]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metalines') }})
    object_display_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectDisplayLabel') }})
    
