from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusStats:
    r"""EnterpriseCrmEventbusStats
    Stats for the requested dimensions: QPS, duration, and error/warning rate
    """
    
    dimensions: Optional[EnterpriseCrmEventbusStatsDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    duration_in_seconds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInSeconds') }})
    error_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorRate') }})
    qps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qps') }})
    warning_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warningRate') }})
    
