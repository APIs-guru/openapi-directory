from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import notificationconfig


@dataclass_json
@dataclass
class DicomStore:
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_config: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    
