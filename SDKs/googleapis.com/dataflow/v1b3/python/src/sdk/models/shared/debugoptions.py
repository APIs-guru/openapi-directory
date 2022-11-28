from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DebugOptions:
    r"""DebugOptions
    Describes any options that have an effect on the debugging of pipelines.
    """
    
    enable_hot_key_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableHotKeyLogging') }})
    
