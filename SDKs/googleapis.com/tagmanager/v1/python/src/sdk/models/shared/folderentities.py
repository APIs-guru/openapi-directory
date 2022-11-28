from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FolderEntities:
    r"""FolderEntities
    Represents a Google Tag Manager Folder's contents.
    """
    
    tag: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    trigger: Optional[List[Trigger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    variable: Optional[List[Variable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variable') }})
    
