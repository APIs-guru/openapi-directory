from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StragglerDebuggingInfo:
    r"""StragglerDebuggingInfo
    Information useful for debugging a straggler. Each type will provide specialized debugging information relevant for a particular cause. The StragglerDebuggingInfo will be 1:1 mapping to the StragglerCause enum.
    """
    
    hot_key: Optional[HotKeyDebuggingInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotKey') }})
    
