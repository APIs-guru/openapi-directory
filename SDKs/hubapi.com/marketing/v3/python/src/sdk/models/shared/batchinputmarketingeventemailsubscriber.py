from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import marketingeventemailsubscriber


@dataclass_json
@dataclass
class BatchInputMarketingEventEmailSubscriber:
    inputs: List[marketingeventemailsubscriber.MarketingEventEmailSubscriber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    
