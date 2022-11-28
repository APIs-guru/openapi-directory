from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrdersCreateTestOrderRequest:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    test_order: Optional[TestOrder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testOrder') }})
    
