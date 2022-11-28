from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Environment:
    r"""Environment
    Message containing environment configuration for a Lighthouse run.
    """
    
    benchmark_index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benchmarkIndex') }})
    host_user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostUserAgent') }})
    network_user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkUserAgent') }})
    
