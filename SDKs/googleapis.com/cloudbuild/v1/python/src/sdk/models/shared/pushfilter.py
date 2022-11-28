from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PushFilter:
    r"""PushFilter
    Push contains filter properties for matching GitHub git pushes.
    """
    
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    invert_regex: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invertRegex') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
