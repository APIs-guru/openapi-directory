from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import obscheduledpayment3
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadScheduledPayment3Data:
    scheduled_payment: Optional[List[obscheduledpayment3.ObScheduledPayment3]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledPayment' }})
    

@dataclass_json
@dataclass
class ObReadScheduledPayment3:
    data: ObReadScheduledPayment3Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
