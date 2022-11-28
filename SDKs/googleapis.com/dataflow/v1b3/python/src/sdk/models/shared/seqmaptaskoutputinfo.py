from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SeqMapTaskOutputInfo:
    r"""SeqMapTaskOutputInfo
    Information about an output of a SeqMapTask.
    """
    
    sink: Optional[Sink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sink') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
