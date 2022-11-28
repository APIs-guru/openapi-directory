from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObReadScheduledPayment3Data:
    scheduled_payment: Optional[List[ObScheduledPayment3]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledPayment') }})
    

@dataclass_json
@dataclass
class ObReadScheduledPayment3:
    data: ObReadScheduledPayment3Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
