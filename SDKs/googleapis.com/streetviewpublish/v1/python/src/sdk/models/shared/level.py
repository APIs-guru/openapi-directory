from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Level:
    r"""Level
    Level information containing level number and its corresponding name.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    
