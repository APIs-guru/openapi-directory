from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HotKeyDebuggingInfo:
    r"""HotKeyDebuggingInfo
    Information useful for debugging a hot key detection.
    """
    
    detected_hot_keys: Optional[dict[str, HotKeyInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedHotKeys') }})
    
