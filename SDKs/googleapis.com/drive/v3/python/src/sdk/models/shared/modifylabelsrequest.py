from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyLabelsRequest:
    r"""ModifyLabelsRequest
    A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail transactionally.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    label_modifications: Optional[List[LabelModification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelModifications') }})
    
