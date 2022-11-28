from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FailurePolicy:
    r"""FailurePolicy
    Describes the policy in case of function's execution failure. If empty, then defaults to ignoring failures (i.e. not retrying them).
    """
    
    retry: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retry') }})
    
