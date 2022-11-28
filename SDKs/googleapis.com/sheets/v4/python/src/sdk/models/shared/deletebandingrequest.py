from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteBandingRequest:
    r"""DeleteBandingRequest
    Removes the banded range with the given ID from the spreadsheet.
    """
    
    banded_range_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandedRangeId') }})
    
