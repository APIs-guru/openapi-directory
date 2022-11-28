from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConcatPosition:
    r"""ConcatPosition
    A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources.
    """
    
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    position: Optional[Position] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
