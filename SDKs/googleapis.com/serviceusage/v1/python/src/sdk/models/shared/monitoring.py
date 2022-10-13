from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import monitoringdestination
from . import monitoringdestination


@dataclass_json
@dataclass
class Monitoring:
    consumer_destinations: Optional[List[monitoringdestination.MonitoringDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerDestinations' }})
    producer_destinations: Optional[List[monitoringdestination.MonitoringDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'producerDestinations' }})
    
