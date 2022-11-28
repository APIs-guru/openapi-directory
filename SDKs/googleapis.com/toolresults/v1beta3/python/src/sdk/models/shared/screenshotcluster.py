from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScreenshotCluster:
    activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    key_screen: Optional[Screen] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyScreen') }})
    screens: Optional[List[Screen]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screens') }})
    
