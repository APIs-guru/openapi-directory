from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductSubscriptionCost:
    amount: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    period_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodLength') }})
    
