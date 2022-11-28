from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NestingLevel:
    r"""NestingLevel
    Contains properties describing the look and feel of a list bullet at a given level of nesting.
    """
    
    bullet_style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulletStyle') }})
    
