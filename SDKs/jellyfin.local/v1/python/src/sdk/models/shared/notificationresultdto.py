from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notificationdto


@dataclass_json
@dataclass
class NotificationResultDto:
    notifications: Optional[List[notificationdto.NotificationDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notifications' }})
    total_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalRecordCount' }})
    
