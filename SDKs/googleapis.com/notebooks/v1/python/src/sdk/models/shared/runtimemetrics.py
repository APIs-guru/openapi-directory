from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RuntimeMetrics:
    r"""RuntimeMetrics
    Contains runtime daemon metrics, such as OS and kernels and sessions stats.
    """
    
    system_metrics: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemMetrics') }})
    
