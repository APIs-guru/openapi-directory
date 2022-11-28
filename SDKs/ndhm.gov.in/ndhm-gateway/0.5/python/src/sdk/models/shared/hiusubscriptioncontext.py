from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HiuSubscriptionContext:
    categories: List[SubscriptionCategoryEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    period: SubscriptionPeriod = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    hip: Optional[OrganizationRepresentation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hip') }})
    
