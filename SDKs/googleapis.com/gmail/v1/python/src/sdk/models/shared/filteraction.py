from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FilterAction:
    r"""FilterAction
    A set of actions to perform on a message.
    """
    
    add_label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addLabelIds') }})
    forward: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forward') }})
    remove_label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeLabelIds') }})
    
