from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObReadDataScheduledPayment3:
    scheduled_payment: Optional[List[ObScheduledPayment3]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledPayment') }})
    
