from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MatchedLocation:
    r"""MatchedLocation
    Represents a possible match to a location.
    """
    
    is_exact_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isExactMatch') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
