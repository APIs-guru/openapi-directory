from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Projection:
    r"""Projection
    A representation of a property in a projection.
    """
    
    property: Optional[PropertyReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    
