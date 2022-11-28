from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateNamedRangeResponse:
    r"""CreateNamedRangeResponse
    The result of creating a named range.
    """
    
    named_range_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRangeId') }})
    
