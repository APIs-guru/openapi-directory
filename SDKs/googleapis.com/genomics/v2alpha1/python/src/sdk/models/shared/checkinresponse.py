from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CheckInResponse:
    r"""CheckInResponse
    The response to the CheckIn method.
    """
    
    deadline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadline') }})
    features: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
