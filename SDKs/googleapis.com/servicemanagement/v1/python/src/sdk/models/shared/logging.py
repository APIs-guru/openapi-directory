from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Logging:
    r"""Logging
    Logging configuration of the service. The following example shows how to configure logs to be sent to the producer and consumer projects. In the example, the `activity_history` log is sent to both the producer and consumer projects, whereas the `purchase_history` log is only sent to the producer project. monitored_resources: - type: library.googleapis.com/branch labels: - key: /city description: The city where the library branch is located in. - key: /name description: The name of the branch. logs: - name: activity_history labels: - key: /customer_id - name: purchase_history logging: producer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history - purchase_history consumer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history
    """
    
    consumer_destinations: Optional[List[LoggingDestination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerDestinations') }})
    producer_destinations: Optional[List[LoggingDestination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerDestinations') }})
    
