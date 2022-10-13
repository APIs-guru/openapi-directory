from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hotkeydebugginginfo


@dataclass_json
@dataclass
class StragglerDebuggingInfo:
    hot_key: Optional[hotkeydebugginginfo.HotKeyDebuggingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotKey' }})
    
