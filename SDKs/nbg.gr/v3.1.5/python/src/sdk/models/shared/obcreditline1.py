from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObCreditLine1:
    included: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Included') }})
    amount: Optional[ObActiveOrHistoricCurrencyAndAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    type: Optional[ObExternalLimitType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
