from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import marketingeventcreaterequestparams


@dataclass_json
@dataclass
class BatchInputMarketingEventCreateRequestParams:
    inputs: List[marketingeventcreaterequestparams.MarketingEventCreateRequestParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    
