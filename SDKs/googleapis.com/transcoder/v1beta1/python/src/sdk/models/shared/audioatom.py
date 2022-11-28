from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AudioAtom:
    r"""AudioAtom
    The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
    """
    
    channels: Optional[List[AudioChannel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
