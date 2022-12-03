from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StatusReason:
    r"""StatusReason
    This will be returned when the status is declined, referred, or unsupported. When the source is \"Carrier\" the status reason is from the integrated carrier. When the source is \"API\", the reason has been cleaned by Herald.
    """
    
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
