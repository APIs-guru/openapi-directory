from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import urlnotification
from . import urlnotification


@dataclass_json
@dataclass
class URLNotificationMetadata:
    latest_remove: Optional[urlnotification.URLNotification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestRemove' }})
    latest_update: Optional[urlnotification.URLNotification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestUpdate' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
