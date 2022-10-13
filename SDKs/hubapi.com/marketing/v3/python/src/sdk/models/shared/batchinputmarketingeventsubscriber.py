from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import marketingeventsubscriber


@dataclass_json
@dataclass
class BatchInputMarketingEventSubscriber:
    inputs: List[marketingeventsubscriber.MarketingEventSubscriber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    
