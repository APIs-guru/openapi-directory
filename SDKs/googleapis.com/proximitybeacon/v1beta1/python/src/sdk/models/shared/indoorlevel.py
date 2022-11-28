from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IndoorLevel:
    r"""IndoorLevel
    Indoor level, a human-readable string as returned by Google Maps APIs, useful to indicate which floor of a building a beacon is located on.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
