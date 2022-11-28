from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddBandingResponse:
    r"""AddBandingResponse
    The result of adding a banded range.
    """
    
    banded_range: Optional[BandedRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandedRange') }})
    
