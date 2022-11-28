from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Links:
    r"""Links
    Links relevant to the payload
    """
    
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Self') }})
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('First') }})
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Last') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Next') }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prev') }})
    
