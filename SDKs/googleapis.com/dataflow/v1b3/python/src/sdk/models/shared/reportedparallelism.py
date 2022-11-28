from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportedParallelism:
    r"""ReportedParallelism
    Represents the level of parallelism in a WorkItem's input, reported by the worker.
    """
    
    is_infinite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInfinite') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
