from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HotKeyInfo:
    r"""HotKeyInfo
    Information about a hot key.
    """
    
    hot_key_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotKeyAge') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    key_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyTruncated') }})
    
