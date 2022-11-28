from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Configuration:
    r"""Configuration
    Specifies general configurations that are taken into account when solving the vehicle routing problem.
    """
    
    routing: Optional[Routing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing') }})
    
