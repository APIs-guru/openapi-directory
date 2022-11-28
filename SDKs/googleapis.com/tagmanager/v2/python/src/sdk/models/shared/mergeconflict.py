from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MergeConflict:
    r"""MergeConflict
    Represents a merge conflict.
    """
    
    entity_in_base_version: Optional[Entity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityInBaseVersion') }})
    entity_in_workspace: Optional[Entity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityInWorkspace') }})
    
