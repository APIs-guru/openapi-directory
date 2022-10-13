from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import subscriptionresponse


@dataclass_json
@dataclass
class SubscriptionListResponse:
    results: List[subscriptionresponse.SubscriptionResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
