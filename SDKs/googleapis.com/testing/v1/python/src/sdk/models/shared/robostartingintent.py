from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RoboStartingIntent:
    r"""RoboStartingIntent
    Message for specifying the start activities to crawl.
    """
    
    launcher_activity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launcherActivity') }})
    start_activity: Optional[StartActivityIntent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startActivity') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
