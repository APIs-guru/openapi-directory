from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hotkeyinfo


@dataclass_json
@dataclass
class HotKeyDebuggingInfo:
    detected_hot_keys: Optional[dict[str, hotkeyinfo.HotKeyInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedHotKeys' }})
    
