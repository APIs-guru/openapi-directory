from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddBandingRequest:
    r"""AddBandingRequest
    Adds a new banded range to the spreadsheet.
    """
    
    banded_range: Optional[BandedRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandedRange') }})
    
