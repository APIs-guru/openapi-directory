from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pubsubdestination


@dataclass_json
@dataclass
class FeedOutputConfig:
    pubsub_destination: Optional[pubsubdestination.PubsubDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubDestination' }})
    
