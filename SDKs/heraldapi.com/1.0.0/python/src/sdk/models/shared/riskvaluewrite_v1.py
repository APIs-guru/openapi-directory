from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RiskValueWriteV1:
    r"""RiskValueWriteV1
    Risk values assign specific values to risk parameters.
    """
    
    risk_parameter_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('risk_parameter_id') }})
    value: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    child_risk_values: Optional[list[RiskValueWriteV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('child_risk_values') }})
    
