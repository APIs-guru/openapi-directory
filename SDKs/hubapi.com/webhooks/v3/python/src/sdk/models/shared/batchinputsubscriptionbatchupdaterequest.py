from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import subscriptionbatchupdaterequest


@dataclass_json
@dataclass
class BatchInputSubscriptionBatchUpdateRequest:
    inputs: List[subscriptionbatchupdaterequest.SubscriptionBatchUpdateRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    
