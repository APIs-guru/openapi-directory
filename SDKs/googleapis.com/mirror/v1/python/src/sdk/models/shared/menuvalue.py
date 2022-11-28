from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MenuValue:
    r"""MenuValue
    A single value that is part of a MenuItem.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconUrl') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
