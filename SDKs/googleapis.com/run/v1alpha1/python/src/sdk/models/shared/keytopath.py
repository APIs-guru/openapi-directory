from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KeyToPath:
    r"""KeyToPath
    Maps a string key to a path within a volume.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
