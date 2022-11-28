from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Entry:
    r"""Entry
    A single replacement configuration.
    """
    
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseSensitive') }})
    replace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replace') }})
    search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search') }})
    
