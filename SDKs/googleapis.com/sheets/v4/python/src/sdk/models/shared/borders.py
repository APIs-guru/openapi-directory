from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Borders:
    r"""Borders
    The borders of the cell.
    """
    
    bottom: Optional[Border] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottom') }})
    left: Optional[Border] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    right: Optional[Border] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('right') }})
    top: Optional[Border] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    
