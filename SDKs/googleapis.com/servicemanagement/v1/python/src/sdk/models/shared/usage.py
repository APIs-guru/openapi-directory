from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usagerule


@dataclass_json
@dataclass
class Usage:
    producer_notification_channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'producerNotificationChannel' }})
    requirements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requirements' }})
    rules: Optional[List[usagerule.UsageRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
