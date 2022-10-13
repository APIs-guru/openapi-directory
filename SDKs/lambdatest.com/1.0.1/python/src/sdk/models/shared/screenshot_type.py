from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScreenshotType:
    activity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity_id' }})
    browser: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browser' }})
    browser_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browser_version' }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    screenshot_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenshot_url' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail_url' }})
    
