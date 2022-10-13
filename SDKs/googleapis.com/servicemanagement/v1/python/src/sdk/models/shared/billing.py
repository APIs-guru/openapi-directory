from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import billingdestination


@dataclass_json
@dataclass
class Billing:
    consumer_destinations: Optional[List[billingdestination.BillingDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerDestinations' }})
    
