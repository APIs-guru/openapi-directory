from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuntimeInfo:
    r"""RuntimeInfo
    Runtime information about workload execution.
    """
    
    approximate_usage: Optional[UsageMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approximateUsage') }})
    diagnostic_output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosticOutputUri') }})
    endpoints: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputUri') }})
    

@dataclass_json
@dataclass
class RuntimeInfoInput:
    r"""RuntimeInfoInput
    Runtime information about workload execution.
    """
    
    approximate_usage: Optional[UsageMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approximateUsage') }})
    
