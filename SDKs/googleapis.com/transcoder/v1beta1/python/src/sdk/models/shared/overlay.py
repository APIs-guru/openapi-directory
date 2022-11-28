from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Overlay:
    r"""Overlay
    Overlay configuration.
    """
    
    animations: Optional[List[Animation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('animations') }})
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
