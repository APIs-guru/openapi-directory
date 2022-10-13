from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loggingdestination
from . import loggingdestination


@dataclass_json
@dataclass
class Logging:
    consumer_destinations: Optional[List[loggingdestination.LoggingDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerDestinations' }})
    producer_destinations: Optional[List[loggingdestination.LoggingDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'producerDestinations' }})
    
