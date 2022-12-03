from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationWriteV1:
    r"""ApplicationWriteV1
    An application is a set of information submitted by a producer to institutions in order to get quotes.
    """
    
    products: list[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    coverage_values: Optional[list[CoverageValueWriteV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage_values') }})
    risk_values: Optional[list[RiskValueWriteV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('risk_values') }})
    
