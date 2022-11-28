from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderPickupDetails:
    address: Optional[OrderAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    collectors: Optional[List[OrderPickupDetailsCollector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectors') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    
