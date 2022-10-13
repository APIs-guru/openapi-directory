from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NotificationConfig:
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubTopic' }})
    send_for_bulk_import: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendForBulkImport' }})
    
