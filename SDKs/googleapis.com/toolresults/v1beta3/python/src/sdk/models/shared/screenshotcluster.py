from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import screen
from . import screen


@dataclass_json
@dataclass
class ScreenshotCluster:
    activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity' }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    key_screen: Optional[screen.Screen] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyScreen' }})
    screens: Optional[List[screen.Screen]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screens' }})
    
