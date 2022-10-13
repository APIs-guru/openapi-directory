from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FhirNotificationConfig:
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubTopic' }})
    send_full_resource: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendFullResource' }})
    
