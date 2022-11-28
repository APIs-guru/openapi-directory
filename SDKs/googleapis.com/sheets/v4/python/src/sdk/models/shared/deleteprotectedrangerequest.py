from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteProtectedRangeRequest:
    r"""DeleteProtectedRangeRequest
    Deletes the protected range with the given ID.
    """
    
    protected_range_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedRangeId') }})
    
