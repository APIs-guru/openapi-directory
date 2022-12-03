from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ApplicationReadV1StatusEnum(str, Enum):
    INCOMPLETE = "incomplete"
    COMPLETE = "complete"
    SUBMITTED = "submitted"


@dataclass_json
@dataclass
class ApplicationReadV1:
    r"""ApplicationReadV1
    An application is a set of information submitted by a producer to institutions in order to get quotes.
    """
    
    coverage_values: Optional[list[CoverageValueReadV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage_values') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    products: Optional[list[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    risk_values: Optional[list[RiskValueReadV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('risk_values') }})
    status: Optional[ApplicationReadV1StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
