from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScreenshotType:
    activity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_id') }})
    browser: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browser') }})
    browser_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browser_version') }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    screenshot_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenshot_url') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail_url') }})
    
