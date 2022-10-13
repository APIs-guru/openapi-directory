from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import startactivityintent


@dataclass_json
@dataclass
class RoboStartingIntent:
    launcher_activity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launcherActivity' }})
    start_activity: Optional[startactivityintent.StartActivityIntent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startActivity' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
