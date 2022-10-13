from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import obscheduledpayment3


@dataclass_json
@dataclass
class ObReadDataScheduledPayment3:
    scheduled_payment: Optional[List[obscheduledpayment3.ObScheduledPayment3]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledPayment' }})
    
