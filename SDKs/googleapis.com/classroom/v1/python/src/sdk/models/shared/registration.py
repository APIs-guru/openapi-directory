from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudpubsubtopic
from . import feed


@dataclass_json
@dataclass
class Registration:
    cloud_pubsub_topic: Optional[cloudpubsubtopic.CloudPubsubTopic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudPubsubTopic' }})
    expiry_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryTime' }})
    feed: Optional[feed.Feed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feed' }})
    registration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationId' }})
    
