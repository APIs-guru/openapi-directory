from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import streamingconfig


@dataclass_json
@dataclass
class NotificationConfig:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubTopic' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    streaming_config: Optional[streamingconfig.StreamingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingConfig' }})
    
