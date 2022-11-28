from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScreenshotDetails:
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback_url') }})
    defer_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defer_time') }})
    screenshots: Optional[List[ScreenshotType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenshots') }})
    test_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test_id') }})
    test_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test_status') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
