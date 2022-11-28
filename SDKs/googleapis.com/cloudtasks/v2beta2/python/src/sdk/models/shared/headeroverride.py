from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HeaderOverride:
    r"""HeaderOverride
    Wraps the Header object.
    """
    
    header: Optional[Header] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    
